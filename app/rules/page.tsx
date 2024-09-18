'use client'

import { Rules } from "@/components/tools/rules";
import {GlobalConfig, DependsOn} from "../app.config.js"

export default function RulesPage() {
    const lang = 'Русский';

    return (
        <div className="rules-container">
            {DependsOn(GlobalConfig.tg, <p className="rules-subtitle"><a href={GlobalConfig.tg}>Telegram Bot</a></p>)}
            {Rules.languageTexts[lang].rules.map((category) => (
                <div key={category.category} className="category">
                    <h2 className="category-title">{category.category}</h2>
                    {category.rules.map((rule) => (
                        <div key={rule.title} className="rule">
                            <h4 className="rule-title">{rule.title}</h4>
                            {rule.description.split(';').map((item, index) => (
                                <p key={index} className="rule-description">{item.trim()}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}