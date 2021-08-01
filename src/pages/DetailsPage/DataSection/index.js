import React from 'react';
import css from './DataSection.module.css';

function DataSection({ profile }) {
    const { id, dob, gender, nat, location, login, email, cell, phone, } = profile;
    const { street, city, state, country, postcode } = location;
    const date = new Date(dob.date);

    const getData = () => {
        let data = []
        if (id.name) { data.push(['ID type', id.name]) }
        if (id.value) { data.push(['ID number', id.value]) }
        if (gender) { data.push(['Gender', gender]) }
        if (nat) { data.push(['Nationality', nat]) }
        if (dob.age) { data.push(['Age', dob.age]) }
        if (date) { data.push(['Date of birth', date.toLocaleDateString()]) }
        if (login.username) { data.push(['Username', login.username]) }
        if (email) { data.push(['Email', email]) }
        if (phone) { data.push(['Phone', phone]) }
        if (cell) { data.push(['Cellphone', cell]) }
        if (street) { data.push(['Address', `${street.name} ${street.number}`]) }
        if (city && state && country) { data.push(['Location', `${city}, ${state}, ${country}`]) }
        if (postcode) { data.push(['Postal code', postcode]) }
        return data;
    }

    const getColumnsContent = () => {
        const data = getData();
        const firstColumnAmount = Math.ceil(data.length / 2);
        const firstColumnContent = data.slice(0, firstColumnAmount);
        const secondColumnContent = data.slice(firstColumnAmount + 1);

        return [firstColumnContent, secondColumnContent];
    }

    return <div className={css.profileData}>
        {
            getColumnsContent().map( (columnContent, index) =>
                <div key={index} className={css.dataColumn}>
                    {columnContent.map(([title, value], index) => <span key={index} className={css.dataLine}><span className={css.dataTitle}>{title}: </span>{value}</span>)}
                </div>
            )
        }
    </div>;
}

export default DataSection;