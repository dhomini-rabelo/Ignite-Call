import { getCssText } from '@/layout/styles/stitches.config'

export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </>
  )
}
