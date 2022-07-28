/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("./libs/core/src/index.ts");
const user_module_1 = __webpack_require__("./apps/api/src/app/user/user.module.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const bookmark_module_1 = __webpack_require__("./apps/api/src/app/bookmark/bookmark.module.ts");
const database_connection_service_1 = __webpack_require__("./apps/api/src/app/database/database-connection.service.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            core_1.CoreModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            bookmark_module_1.BookmarkModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: database_connection_service_1.DatabaseConnectionService,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const common_1 = __webpack_require__("@nestjs/common");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup() {
        return this.authService.signup();
    }
    signin() {
        return this.authService.signin();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('signup'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AuthController.prototype, "signup", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('signin'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AuthController.prototype, "signin", null);
AuthController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('auth'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const user_entity_1 = __webpack_require__("./apps/api/src/app/entities/user.entity.ts");
const auth_controller_1 = __webpack_require__("./apps/api/src/app/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AuthService = class AuthService {
    signup() {
        return {
            msg: ' i have signed up',
        };
    }
    signin() {
        return {
            msg: 'i have signed in',
        };
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/bookmark/bookmark.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookmarkController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let BookmarkController = class BookmarkController {
};
BookmarkController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('bookmark')
], BookmarkController);
exports.BookmarkController = BookmarkController;


/***/ }),

/***/ "./apps/api/src/app/bookmark/bookmark.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookmarkModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const bookmark_service_1 = __webpack_require__("./apps/api/src/app/bookmark/bookmark.service.ts");
const bookmark_controller_1 = __webpack_require__("./apps/api/src/app/bookmark/bookmark.controller.ts");
let BookmarkModule = class BookmarkModule {
};
BookmarkModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        providers: [bookmark_service_1.BookmarkService],
        controllers: [bookmark_controller_1.BookmarkController]
    })
], BookmarkModule);
exports.BookmarkModule = BookmarkModule;


/***/ }),

/***/ "./apps/api/src/app/bookmark/bookmark.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookmarkService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let BookmarkService = class BookmarkService {
};
BookmarkService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], BookmarkService);
exports.BookmarkService = BookmarkService;


/***/ }),

/***/ "./apps/api/src/app/database/database-connection.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConnectionService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let DatabaseConnectionService = class DatabaseConnectionService {
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: ['dist/apps/api/src/**/*.entity.js'],
            synchronize: true,
        };
    }
};
DatabaseConnectionService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DatabaseConnectionService);
exports.DatabaseConnectionService = DatabaseConnectionService;


/***/ }),

/***/ "./apps/api/src/app/entities/abstract.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
class AbstractEntity extends typeorm_1.BaseEntity {
}
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], AbstractEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.CreateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], AbstractEntity.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], AbstractEntity.prototype, "updatedAt", void 0);
exports.AbstractEntity = AbstractEntity;


/***/ }),

/***/ "./apps/api/src/app/entities/user.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const tslib_1 = __webpack_require__("tslib");
const class_transformer_1 = __webpack_require__("class-transformer");
const class_validator_1 = __webpack_require__("class-validator");
const typeorm_1 = __webpack_require__("typeorm");
const abstract_entity_1 = __webpack_require__("./apps/api/src/app/entities/abstract.entity.ts");
const bcrypt = __webpack_require__("bcrypt");
let UserEntity = class UserEntity extends abstract_entity_1.AbstractEntity {
    hashPassword() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.password = yield bcrypt.hash(this.password, 10);
        });
    }
    toJSON() {
        return (0, class_transformer_1.instanceToPlain)(this);
    }
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserEntity.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserEntity.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: '', nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserEntity.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)({ default: '', nullable: true }),
    (0, tslib_1.__metadata)("design:type", String)
], UserEntity.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.BeforeInsert)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserEntity.prototype, "hashPassword", null);
UserEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)('users')
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./apps/api/src/app/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let UserController = class UserController {
};
UserController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('user')
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/api/src/app/user/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_controller_1 = __webpack_require__("./apps/api/src/app/user/user.controller.ts");
const user_service_1 = __webpack_require__("./apps/api/src/app/user/user.service.ts");
let UserModule = class UserModule {
};
UserModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/api/src/app/user/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let UserService = class UserService {
};
UserService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./libs/core/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
(0, tslib_1.__exportStar)(__webpack_require__("./libs/core/src/lib/core.module.ts"), exports);


/***/ }),

/***/ "./libs/core/src/lib/config/configuration.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configuration = void 0;
const configuration = () => ({
    environment: "development",
    port: parseInt(process.env.PORT || "3000", 10),
});
exports.configuration = configuration;


/***/ }),

/***/ "./libs/core/src/lib/config/validation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchema = void 0;
const Joi = __webpack_require__("joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid("development", "production", "test").required(),
    PORT: Joi.number().default(3000),
});


/***/ }),

/***/ "./libs/core/src/lib/core.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoreModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const configuration_1 = __webpack_require__("./libs/core/src/lib/config/configuration.ts");
const validation_1 = __webpack_require__("./libs/core/src/lib/config/validation.ts");
let CoreModule = class CoreModule {
};
CoreModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.configuration],
                validationSchema: validation_1.validationSchema
            })
        ],
        controllers: [],
        providers: [],
        exports: [],
    })
], CoreModule);
exports.CoreModule = CoreModule;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv/config":
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "joi":
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const config_1 = __webpack_require__("@nestjs/config");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
__webpack_require__("dotenv/config");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const config = app.get(config_1.ConfigService);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
        common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        common_1.Logger.log(`Running in ${config.get('environment')} mode`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map