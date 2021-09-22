import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import InputField from './InputField.js';
import './Form.css';




function Form() {

    const { handleSubmit, formState: { errors }, register , watch } = useForm({mode:"onTouched"});

    const selectedDeliveryFrequenty = watch("deliveryFrequenty");


    function onFormSubmit(data) {
        console.log(data);
    }



    return (
        <div>
            <form className="form" onSubmit={handleSubmit(onFormSubmit)}>

                    <InputField id="details-firstName" label="Voornaam:" type="text"
                                {...register("firstName", {required: true})}
                    />

                    <InputField id="details-lastName" label="Achternaam:" type="text"
                                {...register("lastName", {required: true})}
                    />

                    <InputField id="details-age" label="Leeftijd:" type="number"
                                {...register("age", {
                                        required: true,
                                        min: {
                                            value: 18,
                                            message: "U moet minimaal 18 jaar zijn"
                                        }
                                    }
                                )}
                    />
                    {errors.age && <p>{errors.age.message}</p>}

                    <InputField id="details-postalCode" label="Postcode:" type="text"
                                {...register("postalCode")}
                    />


                    <label htmlFor="deliveryFrequenty">
                        Bezorgfrequentie:
                        <select id="deliveryFrequenty" {...register("deliveryFrequenty")} >
                            <option value="everyweek">iedere week</option>
                            <option value="everyotherweek">om de week</option>
                            <option value="everymonth">iedere maand</option>
                            <option value="other">Anders</option>
                        </select>
                        {selectedDeliveryFrequenty === "other" &&
                        <input
                            type="text"
                            {...register("delivery-Frequenty-other")}
                        />
                        }
                    </label>

                    <label htmlFor="comments">
                        Opmerking:
                        <textarea
                            {...register("comments")}
                            id="comments"
                            rows="4"
                            cols="40"
                            placeholder=""
                        >
                    </textarea>
                    </label>

                    <label htmlFor="form-terms-and-conditions">
                        <input
                            type="checkbox"
                            {...register("form-terms-and-conditions")}
                            id="form-terms-and-conditions"
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    <button type="submit">
                        Verzend
                    </button>
            </form>
        </div>
    );
}

export default Form;





