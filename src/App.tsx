import { SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import { Allotment } from 'allotment'
import MonacoEditor from './MonacoEditor'
import { sandpackDark } from '@codesandbox/sandpack-themes'
import { SandpackFiles } from '@codesandbox/sandpack-react/unstyled'

function App() {
	const files: SandpackFiles = {
		'index.js': {
			code: `import "./styles.css";`,
		},
		'styles.css': `@tailwind base;
    @tailwind components;
    @tailwind utilities;
    `,
		'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
    export default {
      content: ['./**/*.{html,js}'],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    `,
		'postcss.config.js': `export default {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    `,
		'package.json': `{
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
      },
      "devDependencies": {
        "vite": "4.1.4",
        "esbuild-wasm": "0.17.12",
        "tailwindcss": "^3.3.5",
        "autoprefixer": "^10.4.16",
        "postcss": "^8.4.31"
      },
      "dependencies": {}
    }`,
	}

	return (
		<>
			<SandpackProvider template="vite" theme={sandpackDark} files={files}>
				<SandpackLayout className="!rounded-none h-screen">
					<Allotment>
						<Allotment.Pane maxSize={200} minSize={100}>
							<SandpackFileExplorer className="h-full" />
						</Allotment.Pane>
						<Allotment.Pane minSize={300}>
							<MonacoEditor />
						</Allotment.Pane>
						<Allotment.Pane snap minSize={300}>
							<SandpackPreview
								className="!h-full"
								// showNavigator
								showOpenInCodeSandbox
								showRefreshButton
								showSandpackErrorOverlay
								showOpenNewtab
							/>
						</Allotment.Pane>
					</Allotment>
					{/* <SandpackCodeViewer /> */}
					{/* <SandpackCodeEditor showTabs showLineNumbers showInlineErrors wrapContent closableTabs /> */}
					{/* <SandpackConsole /> */}
				</SandpackLayout>
			</SandpackProvider>
		</>
	)
}

export default App
