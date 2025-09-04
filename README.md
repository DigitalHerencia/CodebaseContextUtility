# Codebase Context Utility

A tool for generating LLM-ready context from your codebase. This utility helps you analyze, understand, and prepare your code for AI-assisted development.

## Features

- **File System Integration**: Open and explore local directories and files
- **Drag-and-Drop Functionality**: Easily add files to the project
- **Context Generation**: Create LLM-ready context from your codebase
- **LLM Integration**: Send generated context to various LLM providers
- **Code Analysis**: Syntax highlighting and structure analysis
- **Export Options**: JSON, Markdown, or Plain Text formats
- **Token Estimation**: Calculate token usage for different LLM models

## How Context Generation Works in the Codebase Context Utility

```mermaid
Context Generation Process.download-icon {
            cursor: pointer;
            transform-origin: center;
        }
        .download-icon .arrow-part {
            transition: transform 0.35s cubic-bezier(0.35, 0.2, 0.14, 0.95);
             transform-origin: center;
        }
        button:has(.download-icon):hover .download-icon .arrow-part, button:has(.download-icon):focus-visible .download-icon .arrow-part {
          transform: translateY(-1.5px);
        }
        #mermaid-diagram-rh05{font-family:var(--font-geist-sans);font-size:12px;fill:#000000;}#mermaid-diagram-rh05 .error-icon{fill:#552222;}#mermaid-diagram-rh05 .error-text{fill:#552222;stroke:#552222;}#mermaid-diagram-rh05 .edge-thickness-normal{stroke-width:1px;}#mermaid-diagram-rh05 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-diagram-rh05 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-diagram-rh05 .edge-thickness-invisible{stroke-width:0;fill:none;}#mermaid-diagram-rh05 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-diagram-rh05 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-diagram-rh05 .marker{fill:#666;stroke:#666;}#mermaid-diagram-rh05 .marker.cross{stroke:#666;}#mermaid-diagram-rh05 svg{font-family:var(--font-geist-sans);font-size:12px;}#mermaid-diagram-rh05 p{margin:0;}#mermaid-diagram-rh05 .label{font-family:var(--font-geist-sans);color:#000000;}#mermaid-diagram-rh05 .cluster-label text{fill:#333;}#mermaid-diagram-rh05 .cluster-label span{color:#333;}#mermaid-diagram-rh05 .cluster-label span p{background-color:transparent;}#mermaid-diagram-rh05 .label text,#mermaid-diagram-rh05 span{fill:#000000;color:#000000;}#mermaid-diagram-rh05 .node rect,#mermaid-diagram-rh05 .node circle,#mermaid-diagram-rh05 .node ellipse,#mermaid-diagram-rh05 .node polygon,#mermaid-diagram-rh05 .node path{fill:#eee;stroke:#999;stroke-width:1px;}#mermaid-diagram-rh05 .rough-node .label text,#mermaid-diagram-rh05 .node .label text{text-anchor:middle;}#mermaid-diagram-rh05 .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#mermaid-diagram-rh05 .node .label{text-align:center;}#mermaid-diagram-rh05 .node.clickable{cursor:pointer;}#mermaid-diagram-rh05 .arrowheadPath{fill:#333333;}#mermaid-diagram-rh05 .edgePath .path{stroke:#666;stroke-width:2.0px;}#mermaid-diagram-rh05 .flowchart-link{stroke:#666;fill:none;}#mermaid-diagram-rh05 .edgeLabel{background-color:white;text-align:center;}#mermaid-diagram-rh05 .edgeLabel p{background-color:white;}#mermaid-diagram-rh05 .edgeLabel rect{opacity:0.5;background-color:white;fill:white;}#mermaid-diagram-rh05 .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#mermaid-diagram-rh05 .cluster rect{fill:hsl(0, 0%, 98.9215686275%);stroke:#707070;stroke-width:1px;}#mermaid-diagram-rh05 .cluster text{fill:#333;}#mermaid-diagram-rh05 .cluster span{color:#333;}#mermaid-diagram-rh05 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:var(--font-geist-sans);font-size:12px;background:hsl(-160, 0%, 93.3333333333%);border:1px solid #707070;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-diagram-rh05 .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#000000;}#mermaid-diagram-rh05 .flowchart-link{stroke:hsl(var(--gray-400));stroke-width:1px;}#mermaid-diagram-rh05 .marker,#mermaid-diagram-rh05 marker,#mermaid-diagram-rh05 marker *{fill:hsl(var(--gray-400))!important;stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-rh05 .label,#mermaid-diagram-rh05 text,#mermaid-diagram-rh05 text>tspan{fill:hsl(var(--black))!important;color:hsl(var(--black))!important;}#mermaid-diagram-rh05 .background,#mermaid-diagram-rh05 rect.relationshipLabelBox{fill:hsl(var(--white))!important;}#mermaid-diagram-rh05 .entityBox,#mermaid-diagram-rh05 .attributeBoxEven{fill:hsl(var(--gray-150))!important;}#mermaid-diagram-rh05 .attributeBoxOdd{fill:hsl(var(--white))!important;}#mermaid-diagram-rh05 .label-container,#mermaid-diagram-rh05 rect.actor{fill:hsl(var(--white))!important;stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-rh05 line{stroke:hsl(var(--gray-400))!important;}#mermaid-diagram-rh05 :root{--mermaid-font-family:var(--font-geist-sans);}Format &amp; ExportContext GenerationFile System ProcessingUser Loads FilesFile System ProcessingContext GenerationFormat &amp; ExportScan Directory StructureRead File ContentsFilter Files (Skip node_modules, .git,etc.)Process File MetadataMap Dependencies Between FilesGenerate Architecture OverviewApply User SettingsEstimate Token CountFormat as JSON/Markdown/PlainTextApply Token LimitsGenerate Final Context
