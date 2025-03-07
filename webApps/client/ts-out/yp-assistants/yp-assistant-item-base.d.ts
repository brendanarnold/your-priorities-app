import { YpAiChatbotItemBase } from "../yp-chatbots/yp-chatbot-item-base.js";
import "./widgets/yp-agent-chip.js";
import "./widgets/yp-agent-chip-for-purchase.js";
import "./widgets/yp-login-widget.js";
import "./widgets/yp-agent-configuration-widget.js";
import "./widgets/yp-agent-workflow-widget.js";
import "./widgets/yp-agent-run-widget.js";
import "./widgets/yp-configuration-submitted.js";
export declare class YpAssistantItemBase extends YpAiChatbotItemBase {
    isVoiceMode: boolean;
    isListening: boolean;
    isSpeaking: boolean;
    htmlToRender?: string;
    avatarUrl?: string;
    firstUpdated(changedProps: Map<string, any>): void;
    updated(changedProps: Map<string, any>): void;
    static get styles(): (any[] | import("lit").CSSResult)[];
    renderAvatar(): import("lit-html").TemplateResult<1>;
    renderChatGPT(): import("lit-html").TemplateResult<1>;
    renderUser(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "yp-assistant-item-base": YpAssistantItemBase;
    }
}
//# sourceMappingURL=yp-assistant-item-base.d.ts.map