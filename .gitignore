# Product Management System

A full-stack web application for managing products and categories built with Node.js, Express, MySQL, and EJS.

## 🚀 Features

- ✅ **Category Management**: Create, Read, Update, Delete categories
- ✅ **Product Management**: Create, Read, Update, Delete products
- ✅ **Pagination**: Product listing with customizable page size
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **Database Integration**: MySQL database for data persistence
- ✅ **Form Validation**: Client and server-side validation
- ✅ **Success Messages**: User feedback after operations

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **MySQL Server** (v5.7 or higher)

## 🛠️ Installation & Setup

### 1. Clone/Download the Project

```bash
cd your-project-folder
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- express
- ejs
- mysql2
- body-parser
- method-override

### 3. Setup MySQL Database

**Start MySQL:**
```bash
# Linux
sudo service mysql start

# Windows - via MySQL Workbench or Services
```

**Create Database and Tables:**
```bash
mysql -u root -p < database/schema.sql
```

Or manually:
```sql
mysql -u root -p
```

Then run the SQL commands from `database/schema.sql`

### 4. Configure Database Connection

Open `config/database.js` and update credentials if needed:

```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123!', // CHANGE THIS to your MySQL password
    database: 'machine_test_db',
    // ...
});
```

### 5. Run the Application

```bash
npm start
```

The application will be available at: **http://localhost:3000**

## 📖 Usage Guide

### Getting Started

1. **Visit Homepage**: http://localhost:3000
2. **Create Categories First**: 
   - Go to Categories → Add New Category
   - Example: Electronics, Clothing, Books
3. **Add Products**:
   - Go to Products → Add New Product
   - Fill in product details and select a category
4. **Manage Your Inventory**:
   - Edit products/categories as needed
   - Delete items when necessary
   - Use pagination to browse products

### Available Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page |
| `/categories` | GET | List all categories |
| `/categories/create` | GET | Show create category form |
| `/categories` | POST | Create new category |
| `/categories/:id/edit` | GET | Show edit category form |
| `/categories/:id` | PUT | Update category |
| `/categories/:id` | DELETE | Delete category |
| `/products` | GET | List all products (with pagination) |
| `/products/create` | GET | Show create product form |
| `/products` | POST | Create new product |
| `/products/:id/edit` | GET | Show edit product form |
| `/products/:id` | PUT | Update product |
| `/products/:id` | DELETE | Delete product |

## 🗄️ Database Schema

### Categories Table
```sql
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Products Table
```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);
```

## 🏗️ Project Structure

```
├── server.js              # Main application entry point
├── package.json           # Dependencies and scripts
├── config/
│   └── database.js       # MySQL connection configuration
├── controllers/
│   ├── categoryController.js  # Category business logic
│   └── productController.js   # Product business logic
├── models/
│   ├── Category.js       # Category database operations
│   └── Product.js        # Product database operations
├── routes/
│   ├── categoryRoutes.js # Category route definitions
│   └── productRoutes.js  # Product route definitions
├── views/                # EJS templates
│   ├── index.ejs
│   ├── categories/
│   └── products/
├── public/               # Static files
│   └── css/
│       └── style.css
└── database/
    └── schema.sql        # Database schema and sample data
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads correctly
- [ ] Can create a new category
- [ ] Can view all categories
- [ ] Can edit a category
- [ ] Can delete a category
- [ ] Can create a new product
- [ ] Can view all products
- [ ] Pagination works (next/previous/page numbers)
- [ ] Can change page size
- [ ] Can edit a product
- [ ] Can delete a product
- [ ] Form validation works

### Test Database Queries

```sql
-- Count records
SELECT COUNT(*) FROM categories;
SELECT COUNT(*) FROM products;

-- View all data
SELECT * FROM categories;
SELECT * FROM products;

-- View products with categories
SELECT p.*, c.name as category_name 
FROM products p 
JOIN categories c ON p.category_id = c.id;
```

## 🐛 Troubleshooting

### Issue: "Cannot connect to database"
**Solution**: 
- Ensure MySQL is running
- Check credentials in `config/database.js`
- Verify database exists: `SHOW DATABASES;`

### Issue: "Port 3000 already in use"
**Solution**: 
- Kill the process using port 3000
- Or change PORT in `server.js`

### Issue: "Cannot find module..."
**Solution**: 
- Run `npm install` again

### Issue: Blank page appears
**Solution**: 
- Check all `.ejs` files start with `<!DOCTYPE html>`
- Check browser console for errors (F12)
- Verify CSS file is loading

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "ejs": "^3.1.9",
  "mysql2": "^3.6.0",
  "body-parser": "^1.20.2",
  "method-override": "^3.0.0"
}
```

## 🔐 Security Notes

**For Production Deployment:**
- [ ] Use environment variables for database credentials
- [ ] Implement input sanitization
- [ ] Add user authentication
- [ ] Enable HTTPS
- [ ] Use prepared statements (already implemented)
- [ ] Add CSRF protection
- [ ] Implement rate limiting

## 🚀 Future Enhancements

- User authentication and authorization
- Search and filter functionality
- Product images upload
- Inventory/stock management
- Export to CSV/Excel
- Charts and analytics
- Multi-language support
- API endpoints (REST API)

## 👨‍💻 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, HTML5, CSS3
- **Database**: MySQL
- **Architecture**: MVC (Model-View-Controller)

## 📄 License

This project is created for educational purposes.

## 📧 Contact

For questions or issues, please contact [Your Name/Email]

---

**Created**: January 2026
**Last Updated**: January 2026