tt_content.flexFormSectionDemo = COA
tt_content.flexFormSectionDemo {
	10 = < lib.stdheader

	30 = FFSECTION
	30.rootPath = t3datastructure : pi_flexform->images/el
	30 {
		stdWrap.wrap = <ul id="gallery"> | </div>

		10 = IMAGE
		10.wrap = <li> | </li>
		10.file {
			import.wrap = uploads/tx_weccontentelements_demo/flexFormSectionDemo/
			import.data = flexformSection : image/el/file
			width = 200c
		}
	}
}
