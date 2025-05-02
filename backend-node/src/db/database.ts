import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to in-memory SQLite database');
    }
});

// Initialize vendors table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS vendors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            contact_person TEXT NOT NULL,
            email TEXT NOT NULL,
            partner_type TEXT NOT NULL
        )
    `);
    
    db.run(`
        INSERT INTO vendors (name, contact_person, email, partner_type) VALUES 
        ('Acme Corp', 'John Doe', 'john@acmecorp.com', 'Supplier'),
        ('Globex Inc', 'Jane Smith', 'jane@globex.com', 'Supplier'),
        ('Initech LLC', 'Michael Johnson', 'michael@initech.com', 'Partner'),
        ('Umbrella Corp', 'Sarah Williams', 'sarah@umbrellacorp.com', 'Partner')
    `);
});

export default db;