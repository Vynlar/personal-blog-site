const nodeHtmlToImage = require("node-html-to-image")
const path = require("path")

module.exports = async args => {
  const { markdownNode } = args
  const { title, slug } = markdownNode.frontmatter
  const outputPath = path.join("./public", `${slug}.png`)
  console.log("PATH: ", outputPath)

  await nodeHtmlToImage({
    output: outputPath,
    html: `
      <html>
        <head>
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body style="width: 1200px; height: 630px;">
          <div class="flex flex-col w-full h-full text-white">
            <div
              class="flex flex-col justify-end flex-1 bg-gray-800 p-10 mx-5 mt-5"
              style="border-top-left-radius: 25px; border-top-right-radius: 25px;"
            >
              <div class="text-4xl text-gray-400 font-bold tracking-widest">
                NEW POST
              </div>
              <h1 class="m-0 font-bold" style="font-size: 100px; line-height: 1.1;">
                ${title}
              </h1>
            </div>

            <div
              class="text-gray-800 px-10 py-5 text-6xl font-bold border-l-8 border-r-8 border-b-8 border-radius border-gray-800 mx-5 mb-5"
              style="border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;"
            >
              Adrian Aleixandre
            </div>
          </div>
        </body>
      </html>
    `,
  })
}
