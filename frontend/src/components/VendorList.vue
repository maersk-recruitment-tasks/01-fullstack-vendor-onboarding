<template>
  <div class="vendor-list">
    <h2>Vendor List</h2>
    <div v-if="loading">Loading vendors...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="vendors.length === 0" class="no-vendors">No vendors found. Add your first vendor!</div>
    <table v-else class="vendors-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Person</th>
          <th>Email</th>
          <th>Partner Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vendor in vendors" :key="vendor.id">
          <td>{{ vendor.name }}</td>
          <td>{{ vendor.contact_person }}</td>
          <td>{{ vendor.email }}</td>
          <td>{{ vendor.partner_type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { VendorService } from '../services/VendorService';
import type { Vendor } from '../types/vendor';

export default defineComponent({
  name: 'VendorList',
  emits: ['refresh'],
  props: {
    refreshTrigger: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const vendors = ref<Vendor[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const fetchVendors = async () => {
      loading.value = true;
      error.value = null;
      
      try {
        vendors.value = await VendorService.getVendors();
      } catch (err) {
        error.value = 'Failed to load vendors. Please try again later.';
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchVendors);

    // Watch for refresh triggers from parent
    watchEffect(() => {
      if (props.refreshTrigger > 0) {
        fetchVendors();
      }
    });

    return {
      vendors,
      loading,
      error
    };
  }
});
</script>

<style scoped>
.vendor-list {
  margin: 20px 0;
}

.vendors-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.vendors-table th,
.vendors-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.vendors-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.vendors-table tr:hover {
  background-color: #f5f5f5;
}

.error {
  color: red;
  padding: 10px;
}

.no-vendors {
  padding: 20px;
  text-align: center;
  color: #666;
}
</style>