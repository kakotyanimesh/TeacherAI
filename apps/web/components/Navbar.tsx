import { Book } from 'lucide-react';

export default function Navbar() {
    return ( 
        <div>
            <div className='flex flex-row items-center'>
                <Book size={36} color="#004080" strokeWidth={3} absoluteStrokeWidth />
                <h1 className='text-2xl'>TeachAI</h1>
            </div>
            
        </div>
    )
}