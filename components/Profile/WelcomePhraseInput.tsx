'use client'
import { GlobalConfig } from "@/app/app.config";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Button, Tooltip, Divider } from "@nextui-org/react"
import { useState } from "react";

export function WelcomPhraseInput(
    {initialPhrase}
    :
    {initialPhrase : string}
)
{
    const [welcomePhrase, setWelcomePhrase] = useState(initialPhrase)
    const [isPhraseLoading, setPhraseLoading] = useState(false);
    const [savedPhrase, setSavedPhrase] = useState(initialPhrase);

    return(
        <div className="flex flex-row">
                <Input 
                    required 
                    value={welcomePhrase}
                    onValueChange={setWelcomePhrase}
                    label="Приветственная фраза" 
                    classNames={{
                        label: "text-md",
                        input: "text-lg hover:bg-transparent",
                        innerWrapper:"hover:bg-transparent",
                        inputWrapper:"rounded-l-xl rounded-r-none h-14"
                    }}
                />
                <div className="overflow-hidden rounded-r-xl flex flex-row items-center h-14 bg-[#3F3F46] w-32 justify-between">
                <Tooltip content="Сбросить" closeDelay={200}>    
                    <Button
                        className="rounded-none w-14 h-14"
                        isDisabled={isPhraseLoading}
                        isIconOnly
                        onClick={() => setWelcomePhrase(savedPhrase)}
                    >
                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                    </Button>
                </Tooltip>
                <Divider orientation="vertical" className="h-9"/>
                <Tooltip content="Изменить фразу" closeDelay={200}>
                    <Button
                        className="rounded-none w-14 h-14"
                        isIconOnly
                        isDisabled={savedPhrase == welcomePhrase}
                        isLoading={isPhraseLoading}
                        onClick={async () => {
                            setPhraseLoading(true);
                            await fetch(`${GlobalConfig.localURL}/api/user_data/welcome_phrase?phrase=${welcomePhrase}`,
                                {method: 'POST'})
                            setSavedPhrase(welcomePhrase);
                            setPhraseLoading(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faCheck} size="xl"/>
                    </Button>
                </Tooltip>
                </div>
        </div>
    )
}