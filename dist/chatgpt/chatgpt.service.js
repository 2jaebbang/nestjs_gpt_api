"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let ChatGPTService = exports.ChatGPTService = class ChatGPTService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiKey = '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';
        this.apiUrl = 'https://api.openai.com/v1/completions';
    }
    generateResponse(prompt) {
        const data = {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 1,
        };
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
        };
        return this.httpService.post(this.apiUrl, data, { headers: headers });
    }
};
exports.ChatGPTService = ChatGPTService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ChatGPTService);
//# sourceMappingURL=chatgpt.service.js.map