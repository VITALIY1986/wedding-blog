import Error from './Error';
import {isEmpty, map} from "lodash";
import Abbr from "./form-elements/Abbr";
import ArrowDown from "../icons/ArrowDown";

const CountrySelection = ({input, handleOnChange, countries, isShipping}) => {

    const {address2, errors} = input || {};

    const inputId = `address2-${isShipping ? 'shipping' : 'billing'}`;

    return (
        <div className="mb-3">
            <label className="leading-7 text-sm text-gray-700" htmlFor={inputId}>
                Спосіб доставки
                <Abbr required/>
            </label>
            <div className="relative w-full border-none">
                <select
                    onChange={handleOnChange}
                    value={address2}
                    name="address2"
                    className="bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full"
                    id={inputId}
                >
                    <option value="">Вибрати спосіб...</option>
                    {!isEmpty(countries) &&
                    map(countries, (address2) => (
                        <option key={address2?.countryCode} data-countrycode={address2?.countryCode}
                                value={address2?.countryCode}>
                            {address2?.countryName}
                        </option>
                    ))}
                </select>
                <span className="absolute right-0 mr-1 text-gray-500" style={{top: '25%'}}>
                    <ArrowDown width={24} height={24} className="fill-current"/>
                </span>
            </div>
            <Error errors={errors} fieldName={'address2'}/>
        </div>
    );
}

export default CountrySelection;
