import React, { useEffect, useState } from 'react'
import '../scss/components/_faq.scss'
import Axios from 'axios';
import Loader from './Loader';

import { useTranslation } from "react-i18next";

function Faq() {

	const { t, i18n } = useTranslation();

	const [isMounted, updateIsMounted] = useState(true);
	const [faqs, updateFAQ] = useState(null);

	const FetchFAQ = async () => {
		try{
			let path = `json/faq-${i18n.language}.json`
			const faqPosts = await Axios.get(path);
			updateFAQ(faqPosts.data.faqs);
		}
		catch (err) {
		console.error(err.message);
		}
	}


	const RenderFAQ = () => {
		return faqs.map((faq, key) =>
			<details key={key}>
				<summary>{faq.question}</summary>
				<p>{faq.answer}</p>
			</details>
		)
	}

	useEffect(() => {
		if (!isMounted) {
			return
		}
		FetchFAQ()
		i18n.on('languageChanged', lang => {
			FetchFAQ();
		})
		updateIsMounted(false);
	}, [])

	return (
		<section id="faq" className='faqs' style={{ background: `url('assets/img/faq-bg.png') no-repeat center/cover` }}>
			<h2 className='title center'>{t("vanliga frågor")}</h2>
			{isMounted && <Loader />}
			<div className="faq-container">
				{faqs !== null && RenderFAQ()}
			</div>
		</section>

	)
}

export default Faq;
