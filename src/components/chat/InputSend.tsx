"use client"
import { FormEvent, useState, useRef, useEffect, KeyboardEvent } from 'react';
import { IoSend } from 'react-icons/io5';
interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
}

export const InputSend = ({ onSendMessage, placeholder, disableCorrections = false }: Props) => {

    const [message, setMessage] = useState('');
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setCustomValidity('Por favor, introduce un mensaje.');
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setCustomValidity(message.trim().length > 0 ? '' : 'Por favor, introduce un mensaje.');
        }
    }, [message]);

    const handleSendMessage = (event?: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>) => {
        if (event) {
            event.preventDefault();
        }

        if (message.trim().length === 0) {
            if (inputRef.current) {
                inputRef.current.reportValidity();
            }
            return;
        }

        onSendMessage(message);
        setMessage('');
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    }

    return (
        <form
            onSubmit={handleSendMessage}
            className="flex flex-row items-center rounded-xl w-full px-3"
        >
            <div className="flex-grow relative mt-4">
                <textarea
                    ref={inputRef}
                    autoFocus
                    name="message"
                    className="flex w-full rounded-xl text-black focus:outline-none border-2 focus:border-green-600 border-gray-300 pl-4 pr-10 py-3 resize-none overflow-y-auto max-h-32 custom-scrollbar"
                    placeholder={placeholder}
                    autoComplete={disableCorrections ? 'on' : 'off'}
                    autoCorrect={disableCorrections ? 'on' : 'off'}
                    spellCheck={disableCorrections ? 'true' : 'false'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    required
                    rows={1}
                />
                    <button
                        title='send'
                        className="text-green-800 absolute right-2 top-1/2 transform -translate-y-1/2">
                        <IoSend size={23} />
                    </button>
            </div>
        </form>
    );
};
