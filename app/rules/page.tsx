'use client'

import { Rules, RulesType, Language } from "@/components/tools/rules";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react"


export default function RulesPage()
{
    const languages : Language[] = ['Русский', 'English'];
    const langObj : RulesType = Rules;
    const [lang, setLang] : [Language, any] = useState('Русский');

    return(
        <div className="mx-8 my-8 px-8 py-8 md:mx-16 lg:mx-32 xl:mx-48 md:px-16 rounded-xl bg-background-100">
            <div className="flex flex-col">
                <h1 className="text-3xl">{langObj.languageTexts[lang].mainText}</h1>
                <p className="text-lg my-4">{langObj.languageTexts[lang].subText} <a className="text-red-500" href="https://t.me/EnduranceSupport_bot">Telegram Bot</a>.</p>
                <Select 
                    aria-label="language"
                    defaultSelectedKeys={['Русский']} 
                    className="max-w-xs mb-8" 
                    size="lg"
                    onChange={(s) => {
                        if(s.target.value) setLang(s.target.value);
                    }}
                >
                    {languages.map((l) => (<SelectItem key={l} value={l}>{l}</SelectItem>))}
                </Select>
                <div className="flex flex-col space-y-4">
                    {langObj.languageTexts[lang].rules.map((r) => (
                        <div key={r.title} className="bg-background-50 p-4 rounded-xl">
                            <h4 className="text-2xl">{r.title}</h4>
                            <p className="text-lg text-text-900">{r.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}