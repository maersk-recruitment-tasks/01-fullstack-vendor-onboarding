import { Router, Request, Response } from 'express';
import db from '../db/database';
import { Vendor } from '../models/Vendor';

const router = Router();

// GET /vendors - List all vendors
router.get('/', (req: Request, res: Response) => {
    db.all('SELECT * FROM vendors', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// POST /vendors - Register a new vendor
router.post('/', (req: Request, res: Response) => {
    const { name, contact_person, email, partner_type } = req.body as Vendor;
    
    if (!name || !contact_person || !email || !partner_type) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (partner_type !== 'Supplier' && partner_type !== 'Partner') {
        return res.status(400).json({ error: 'partner_type must be either "Supplier" or "Partner"' });
    }

    const sql = `INSERT INTO vendors (name, contact_person, email, partner_type) 
                 VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [name, contact_person, email, partner_type], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(400).json({ error: 'A vendor with this email already exists. Please use a different email address.' });
            }
            console.error('Error inserting vendor:', err);
            return res.status(500).json({ error: err.message });
        }
        
        res.status(201).json({
            id: this.lastID,
            name,
            contact_person,
            email,
            partner_type
        });
    });
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid vendor ID' });
    }
    const sql = 'DELETE FROM vendors WHERE id = ?';
    db.run(sql, [id], function(err) {
        if (err) {
            console.error('Error deleting vendor:', err);
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Vendor not found' });
        }
        res.status(204).send();
    });
});

router.get('/check-email', (req: Request, res: Response) => {
    const email = req.query.email as string;
    if (!email) {
        return res.status(400).json({ error: 'Email query parameter is required' });
    }
    const sql = 'SELECT COUNT(1) as count FROM vendors WHERE email = ?';
    db.get(sql, [email], (err, row: {count: number}) => {
        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ exists: row.count > 0 });
    });
});

export default router;