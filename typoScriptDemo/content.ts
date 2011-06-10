tt_content.typoScriptDemo = COA
tt_content.typoScriptDemo {
	10 = < lib.stdheader

	20 = COA
	20 {
		dataWrap = <div itemscope itemtype="http://schema.org/Person">

		10 = TEXT
		10.wrap = <span itemprop="name"> | </span>
		10.data = t3datastructure : pi_flexform->name

		15 = IMAGE
		15.file {
			import.wrap = uploads/tx_weccontentelements_demo/typoScriptDemo/ |
			import.data = t3datastructure : pi_flexform->image
			width = 150c
			height = 150c
		}

		20 = COA
		20 {
			wrap = <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"> | </div>

			10 = TEXT
			10.wrap = <span itemprop="streetAddress"> | </span>
			10.data = t3datastructure : pi_flexform->streetAddress

			20 = TEXT
			20.wrap = <span itemprop="addressLocality"> | </span>
			20.data = t3datastructure : pi_flexform->addressLocalicty

			30 = TEXT
			30.wrap = <span itemprop="addressRegion"> | </span>
			30.data = t3datastructure : pi_flexform->addressRegion

			40 = TEXT
			40.wrap = <span itemprop="postalCode"> | </span>
			40.data = t3datastructure : pi_flexform->postalCode
		}

		30 = TEXT
		30.wrap = <span itemprop="telephone"> | </span>
		30.data = t3datastructure : pi_flexform->telephone

		40 = TEXT
		40.typolink.data = t3datastructure : pi_flexform->email
		40.typolink.ATagParams = itemprop="email"

		50 = TEXT
		50.wrap = Home Page: |
		50.typolink.data = t3datastructure : pi_flexform->url
		50.typolink.ATagParams = itemprop="url"
		}
}
