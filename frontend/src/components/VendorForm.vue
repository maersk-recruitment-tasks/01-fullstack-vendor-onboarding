<template>
  <div class="vendor-form">
    <h2>Add New Vendor</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          id="name" 
          v-model="form.name" 
          type="text" 
          required 
          placeholder="Company name"
        />
      </div>
      
      <div class="form-group">
        <label for="contactPerson">Contact Person:</label>
        <input 
          id="contactPerson" 
          v-model="form.contact_person" 
          type="text" 
          required 
          placeholder="Contact person name"
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          id="email" 
          v-model="form.email" 
          type="email" 
          required 
          placeholder="contact@example.com"
        />
      </div>
      
      <div class="form-group">
        <label for="partnerType">Partner Type:</label>
        <select 
          id="partnerType" 
          v-model="form.partner_type" 
          required
        >
          <option value="Supplier">Supplier</option>
          <option value="Partner">Partner</option>
        </select>
      </div>
      
      <div class="form-actions">
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Submitting...' : 'Add Vendor' }}
        </button>
        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-if="success" class="success-message">Vendor added successfully!</div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { VendorService } from '../services/VendorService';
import type { Vendor } from '../types/Vendor';

export default defineComponent({
  name: 'VendorForm',
  emits: ['vendor-added'],
  setup(props, { emit }) {
    const form = reactive<Vendor>({
      name: '',
      contact_person: '',
      email: '',
      partner_type: 'Supplier'
    });
    
    const isSubmitting = ref(false);
    const error = ref<string | null>(null);
    const success = ref(false);
    
    const resetForm = () => {
      form.name = '';
      form.contact_person = '';
      form.email = '';
      form.partner_type = 'Supplier';
      error.value = null;
    };
    
    const submitForm = async () => {
      isSubmitting.value = true;
      error.value = null;
      success.value = false;
      
      try {
        const newVendor = await VendorService.createVendor({ ...form });
        success.value = true;
        emit('vendor-added', newVendor);
        
        // Reset the form after successful submission
        setTimeout(() => {
          resetForm();
          success.value = false;
        }, 2000);
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to add vendor. Please try again.';
      } finally {
        isSubmitting.value = false;
      }
    };
    
    return {
      form,
      isSubmitting,
      error,
      success,
      submitForm
    };
  }
});
</script>

<style scoped>
.vendor-form {
  max-width: 500px;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-actions {
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: #f44336;
  margin-top: 10px;
}

.success-message {
  color: #4CAF50;
  margin-top: 10px;
}
</style>