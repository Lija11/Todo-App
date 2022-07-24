import React, { useState } from 'react';
import { faqsData } from './Data';
import Faq from './Faq';
import style from './Style/faqs.module.css'

const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);
    return (
        <main className ={style.container}>
           <section className={style.faqs}>
            <h1>FAQS</h1>
            {
                faqs.map(faq => <Faq key = {faq.id} {...faq}/>)
            }
            </section> 
        </main>
    );
};

export default FAQS;