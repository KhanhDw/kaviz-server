# 🚀 KaViz Server — Backend Setup Guide

Backend này được xây dựng bằng **Fastify + Prisma + TypeScript**
Kiến trúc theo mô hình **Hexagonal Architecture**.

---

## 📦 1️⃣ Cài đặt & Chuẩn bị môi trường

### Yêu cầu:

- Node.js ≥ 18
- MySQL (local hoặc Docker)
- npm hoặc pnpm

### Cài dependency:

```bash
npm install
```

# Cấu hình biến môi trường:

Tạo file .env tại thư mục gốc:

# MySQL connection string

DATABASE_URL="mysql://root:123456@localhost:3306/kaviz_db"

⚠️ Không commit .env lên git.
Có thể tạo thêm .env.example để mẫu cho người khác.

# 3️⃣ Các lệnh quan trọng

| Lệnh                 | Mô tả                            | Ghi chú              |
| -------------------- | -------------------------------- | -------------------- |
| `npm run dev`        | Chạy server ở chế độ watch (tsx) | Dùng khi dev         |
| `npm run build`      | Build TypeScript sang JS (dist/) | Output trong `dist/` |
| `npm start`          | Chạy bản build (`dist/main.js`)  | Dùng khi deploy      |
| `npm run test`       | Chạy toàn bộ test với Vitest     |                      |
| `npm run test:watch` | Chạy test ở chế độ live          |                      |

# 4️⃣ Lệnh Prisma

Tạo Prisma Client (cho MySQL)

```bash
npm run prisma:gen:mysql
```

# Migrate database (dev mode)

```bash
npm run prisma:migrate
```

Tạo / cập nhật schema database theo model.

# Mở Prisma Studio (trình xem dữ liệu)

```bash
npm run prisma:studio
```

Mở giao diện web (thường tại http://localhost:5555).

# 5️⃣ Reset hoặc dọn dẹp khi lỗi

| Hành động              | Lệnh                                      | Ghi chú                             |
| ---------------------- | ----------------------------------------- | ----------------------------------- |
| Xóa client Prisma cũ   | `rmdir /s /q node_modules\@prisma\client` | Chạy lại `npm run prisma:gen:mysql` |
| Reset database dev     | `npx prisma migrate reset`                | ⚠️ Xóa toàn bộ dữ liệu              |
| Làm sạch toàn bộ cache | `rmdir /s /q node_modules && npm install` | Dùng khi bị lỗi lạ                  |

# 6️⃣ Luồng phát triển

1. Chỉnh sửa model trong prisma/mysql/schema.prisma

2. Chạy:

```bash
npm run prisma:gen:mysql
npm run prisma:migrate
```

3. Chạy server:

```bash
npm run dev
```

4. Dùng Prisma Client trong code:

```js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```
