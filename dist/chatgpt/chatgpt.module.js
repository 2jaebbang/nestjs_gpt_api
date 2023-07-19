"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTModule = void 0;
const common_1 = require("@nestjs/common");
const chatgpt_service_1 = require("./chatgpt.service");
const chatgpt_controller_1 = require("./chatgpt.controller");
const axios_1 = require("@nestjs/axios");
let ChatGPTModule = exports.ChatGPTModule = class ChatGPTModule {
};
exports.ChatGPTModule = ChatGPTModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [chatgpt_service_1.ChatGPTService],
        controllers: [chatgpt_controller_1.ChatGPTController],
        exports: [chatgpt_service_1.ChatGPTService],
    })
], ChatGPTModule);
//# sourceMappingURL=chatgpt.module.js.map