import { FileTabs, SandpackStack, useSandpack, useActiveCode } from '@codesandbox/sandpack-react'
import { Editor } from '@monaco-editor/react'

export default function MonacoEditor() {
	const { code, updateCode } = useActiveCode()
	const { sandpack } = useSandpack()
	console.log(sandpack)
	return (
		<SandpackStack className="!h-full">
			<FileTabs />
			<div className="flex-1">
				<Editor
					height="100%"
					width="100%"
					theme="vs-dark"
					defaultLanguage={getLanguage(sandpack.activeFile)}
					key={sandpack.activeFile}
					defaultValue={code}
					onChange={(value) => updateCode(value ?? '')}
				/>
			</div>
		</SandpackStack>
	)
}

function getLanguage(fileName: string) {
	const ext = fileName.split('.').pop()
	switch (ext) {
		case 'json':
			return 'json'
		case 'js':
			return 'javascript'
		case 'ts':
			return 'typescript'
		case 'css':
			return 'css'
		case 'html':
			return 'html'
	}
}
