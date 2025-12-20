"use client"
import { useEffect } from 'react'

export default function DocsRedirect() {
  useEffect(()=>{
    // Try VitePress dev server first
    const viteUrl = 'http://localhost:5173/'
    // Attempt a client-side redirect to the VitePress dev server after a short delay
    const t = setTimeout(()=>{
      try { window.location.href = viteUrl } catch(e){}
    }, 600)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div style={{padding:24,maxWidth:720,margin:'40px auto',fontFamily:'Arial,Helvetica,sans-serif'}}>
      <h1>Docs</h1>
      <p>If the VitePress dev server is running, you'll be redirected shortly.</p>
      <p>If not, open the docs locally with:</p>
      <pre style={{background:'#f6f6f6',padding:12}}>npm run docs:dev</pre>
      <p>Or view the static docs (when deployed) at <a href="/docs/">/docs/</a>.</p>
      <p><a href="http://localhost:5173/">Open VitePress (dev)</a> · <a href="/docs/">Open built docs</a></p>
    </div>
  )
}
