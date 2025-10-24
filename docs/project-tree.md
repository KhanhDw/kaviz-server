src/
├── application/ # Nơi chứa use-case (business logic + flow)
│ ├── use-cases/
│ └── services/
│
├── domain/ # Nơi chứa logic nghiệp vụ thuần (entities, rules) [trái tim của ứng dụng]
│ ├── entities/
│ └── repositories/
│
├── infrastructure/ # Nơi chứa phần phụ trợ (DB, API, DI container)
│ ├── prisma/
│ ├── di/
│ └── database/
│
├── interfaces/ # Nơi giao tiếp với bên ngoài (HTTP, CLI,...)
│ ├── controllers/
│ └── routes/
│
└── main.ts # Điểm khởi động app

# luồng logic của kiến trúc:

[ Interface / Adapter Layer ]
↓
[ Application Layer (Use cases) ]
↓
[ Domain Layer (Entities, Rules) ]
↓
[ Infrastructure (DB, external services) ]

# luồng hoạt động tổng thể

bên ngoài vào server: web -> Fastify route -> Controller -> Use Case -> Repository -> Prisma -> Database
server ra bên ngoài: Database -> Prisma -> Repository -> Use Case -> Controller -> Fastify route -> web

# Tổng kết luồng liên kết (tưởng tượng như sơ đồ)

HTTP Request
↓
Fastify Route (interfaces/routes)
↓
Controller (interfaces/controllers)
↓
Use Case (application/use-cases)
↓
Entity (domain/entities)
↓
Repository (domain/repositories)
↓
Prisma Adapter (infrastructure/prisma)
↓
Database

# Tư duy khi thêm mới một tính năng

Giả sử bạn muốn thêm “Get All Users”, hãy làm đúng chuỗi:

Bước - Layer File cần tạo

1. Domain - (nếu cần entity mới, thêm ở đây)
2. Application - GetUsersUseCase.ts
3. Infrastructure - (repository method findAll)
4. Interfaces - UserController.getAll, route /users
5. DI - đăng ký getUsersUseCase trong container.ts

👉 Không bao giờ gọi Prisma trực tiếp trong controller.
Tất cả phải đi qua use-case.
