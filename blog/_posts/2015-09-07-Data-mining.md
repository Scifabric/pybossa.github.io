---
layout: post
title:  "Brain vs Processor: Part 3 – PDF Data Mining"
date:   2015-09-07 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
photo: /assets/img/blog/Quill.jpg
photo_author: Lennart Tange
photo_url: https://www.flickr.com/photos/lennartt/7767334716/in/photolist-cQnC15-nFXbc-hbUp9u-2pZ7fV-817Gkm-f5Ebvo-7vuMwr-oiudxM-6fHYs4-bbkYzz-qqBSXL-vWrZ5f-oE9DyL-93EhKE-5Aqfvq-qHZBcg-9NbGou-jGaJ3k-5FdXox-q4ZB3R-2YGADn-f5WiW4-6YJjjy-4okHTv-8vC3Ef-6P2h7m-7SyD2r-bNLgPc-gFc8B2-7S5Acj-nhku2N-3r5Lz-619scQ-oiidpw-c7S5NS-4opDnA-86CQHB-jBLsX1-awriLT-kfUQa1-47GeJT-CbBZY-6QSy1v-87BChS-fj9zct-4mYwgs-2CWoeV-6vcfbQ-5koddX-zQLni
intro: "Use PyBossa and Crowdcrafting to extract information from PDF documents"
author: jimmyd
keywords: crowdsourcing, crowdcrafting, PyBossa, open, source, science, citizen, opensource, transcribe, cognitive, image, pattern, recognition, sound, data, mine, PDF
---

Welcome to Part 3 of our Brain vs. Processor blog series, which is examining how the human brain remains a more versatile and effective tool than computers for interpreting certain types of data, and detailing how you can use [PyBossa](http://pybossa.com/) software to tap into these capabilities.

So far we’ve talked about how humans are ace at interpreting [images](http://pybossa.com/blog/2015/04/02/Image_Pattern_Recognition/) and [sounds](http://pybossa.com/blog/2015/05/10/Sound_Pattern_Recognition/). This blog post focuses on another amazing skill we possess that you’re doing right now… yup, reading!

# Interpretation skills

Computers are becoming more sophisticated at transcribing information from documents. But humans still have the edge when it comes to more advanced analysis, such as extracting specific key pieces of information, understanding the meaning of a document and being able to summarise it, and interpreting old swirly-wurly illegible handwriting. Researchers are using PyBossa and [Crowdcrafting](http://crowdcrafting.org/) to exploit these skills.

# Transcribing documents in Crowdcrafting

Scifabric’s head honcho [Daniel Lombraña González](http://daniellombrana.es/) has kindly recorded a little video that shows how easy it is to set up a PDF transcription project in Crowdcrafting. 

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/GoL0SVC48eg' frameborder='0' allowfullscreen></iframe></div>

Just create a new project, use the platform’s integration with Dropbox to upload your PDF files, then set-up tasks for volunteers using Crowdcrafting’s convenient ‘Transcribing Documents’ template and – voilà  – you’ve got yourself a data mining project.

We have some awesome projects making the most of these capabilities.

# Open Oil
 
The [Open Oil](http://openoil.net/) project wants to make the oil industry more transparent. Oil conglomerates can be made up of hundreds of companies related by a complex web of contracts. Regulation often requires that the contracts be made publicly available but nevertheless understanding the industry as a whole is a massive challenge. [Open Oil](http://openoil.net/) uploads contracts into their own [Crowdcrafting project](https://crowdcrafting.org/project/openoil/) and asks volunteers to extract key pieces of information. This will help the team gain a better understanding of how the industry works.

![alttext](/assets/img/blog/OilSunset.jpg "Pete Markham")
<p class="post-caption">Photo by <a https://www.flickr.com/photos/pmarkham/15239838875/in/photolist-pdGa9F-fAvxEi-71K9Q8-wHSCbR-5zmEbT-weBXfX-cj2RnA-aQaLwt-aF3BRB-9VhRZP-9V6tx4-pqarNg-ggofYY-qDTCi-qDTyp-67eXv4-wiwiW-6FkGU5-6tvHay-bXhiYh-8Eiz5y-pFTsmT-b1kzEx-ggofKb-9kfA6B-71Pb5L-9Z7pN3-71Karr-9UuMh3-6ZQvDd-6tK5TM-72zFcj-wHSxMR-pFTs98-6trCak-7deMVi-5TEhqr-7Dv9R5-oWcmq7-aAJWSh-aAJWGb-aAGd7g-7ZxVc-roBiy-tQ7d8r-4YkeaK-6EG8oP-wY3zGA-wY3A5u-wHSARX>Pete Markham</a> Has the sun set on secrecy in the oil industry?</p>

Follow Open Oil on [Twitter](https://twitter.com/Open_Oil).

# Iceland's Criminal Court

In the [Héraðsdómar - sýknað eða sakfellt](http://crowdcrafting.org/project/heradsdomar/) project, Icelandic citizen [Páll Hilmarsson](http://gogn.in/) wanted to test a journalist's published assertions that a particular judge, who had a conviction rate of 95%, was biased. Páll uploaded 4,700 judgements of the Reykjavik district court to Crowdcrafting and asked volunteers to note the identity of the judge and whether there was a conviction in each case. In only 17 days, 300 users completed almost 15,000 tasks. Analysis showed that the judge in question was within the statistical norm and that, said journalist, needed a lesson in statistics. We think he got one...

# LibCrowds

[LibCrowds](http://www.libcrowds.com/) is a new crowdsourcing platform that aims to make the physical and digital collections of the [British Library](http://www.bl.uk/) more accessible. Its maiden project – [Convert-a-Card](http://www.libcrowds.com/project/category/convert-a-card/) – asks volunteers to transcribe text from printed card catalogues into electronic records in order to make them available to a worldwide audience. The project is initially focused on the library's Asian and African collections, particularly the Chinese and Indian catalogues. Data identified, transcribed or translated as part of the project will be freely accessible from the British Library's [Explore](http://explore.bl.uk/primo_library/libweb/action/search.do?dscnt=1&dstmp=1437390432340&vid=BLVU1&fromLogin=true) catalogue.

![alttext](/assets/img/blog/IndexCards.jpg "Courtesy of Asmund")
<p class="post-caption">Photo by <a href="https://www.flickr.com/photos/aasmund/5993042392/in/photolist-7XcTiQ-aEDMSr-AZmBP-a8zUH7-hT9z3h-mVG2p-eKApQ-7c4zmn-2SsHds-e3v2p-62GZsv-dTWkg-69xbpZ-9tRn2x-6Y64Dj-7GjptE-8PQRst-6rp3Eb-2mP3PU-5VkjyT-hvCx9">Asmund</a> Indexed cards.</p>

Follow [LibCrowds](https://twitter.com/LibCrowds) and the [British Library](https://twitter.com/britishlibrary) on Twitter.

# Need a hand?

If you need to do a bit of data mining, [PyBossa](http://pybossa.com/) and [Crowdcrafting](http://crowdcrafting.org/) may provide you with the ideal tool. Need any help or advice on setting your project up? Contact us on info@scifabric.com.

