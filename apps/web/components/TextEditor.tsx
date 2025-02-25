"use client"

import ReactQuill from "react-quill-new"
import dynamic from "next/dynamic"
import { useRef } from "react"
import 'react-quill-new/dist/quill.snow.css';

// to add react-quill on clinet side only 
// const ReactQuill = dynamic(
//     () => import('react-quill'),
//     {
//         ssr : false,
//         loading : () => <p>loading ..... </p>
//     }
// )

interface QuillTypes {
    value : string,
    onChange : (value : string) => void
    // for changes in while changing in text in the editor
}


export default function TextEditor ({value, onChange} : QuillTypes){
    // modules creation (use with "s")
    const editorRef = useRef(null)

    const modules = {
        toolbar : [
            ['bold', 'italic', 'underline'],
            [{list : 'ordered'}, {list : 'bullet'}],
            ['link', 'image'],
            ['clean']
        ]
    }
    return (
        <ReactQuill
            ref={editorRef}
            theme="snow"
            value={value}
            onChange={onChange}
            modules={modules}
        />
    )
}
