export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Coming soon powered by Krungthep Startup</title> 
         <link href="styles/style.css" rel="stylesheet" type="text/css" media="all" />
          <link href="styles/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />
      </head>
      <body>{children}</body>
    </html>
  )
}
