export const editorConfig = {
	readonly: false,
	toolbar: true,
	spellcheck: true,
	language: 'en',
	toolbarButtonSize: 'medium',
	// toolbarAdaptive: false,
	showCharsCounter: true,
	showWordsCounter: true,
	showXPathInStatusbar: false,
	askBeforePasteHTML: true,
	askBeforePasteFromWord: true,
	addNewLine: false,
	//defaultActionOnPaste: "insert_clear_html",
	// buttons: buttons,
	uploader: {
		insertImageAsBase64URI: true
	},

	minHeight: 200,
	controls: {
		font: {
			command: 'fontname',
			list: {
				"'Open Sans',sans-serif": 'Open Sans',
				'Helvetica,sans-serif': 'Helvetica',
				'Arial,Helvetica,sans-serif': 'Arial',
				'Georgia,serif': 'Georgia',
				'Impact,Charcoal,sans-serif': 'Impact',
				'Tahoma,Geneva,sans-serif': 'Tahoma',
				"'Times New Roman',Times,serif": 'Times New Roman',
				'Verdana,Geneva,sans-serif': 'Verdana',
				'Consolas,monaco,monospace': 'Consolas'
			}
		}
	}
};


