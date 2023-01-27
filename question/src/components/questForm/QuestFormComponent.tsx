import { IQuest } from '../../types/quest.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import css from './QFC.module.css';
import {
    aboutClientsAsc,
    aboutCompetitorsAsc,
    budgetAsc,
    chanelSpeakAsc,
    companyNameAsk,
    contentWebAsk,
    currentWebAsc,
    designWebAsk,
    elementsWebAsc,
    emailAsk,
    firstNameAsk,
    forgotAsc,
    functionalWebAsc,
    needToDoAsk,
    pagesWebAsc,
    phoneNumberAsk,
    serviceAreaAsk,
    startAsc,
    termAsc,
    uniqueProductAsc,
    visitSpeakAsk,
} from '../../constants/inputsText/inputsText';
import {
    AreaTextComponent,
    CheckBoxComponent,
    InputDateComponent,
    InputNumberComponent,
    InputRadioComponent,
    InputTextComponent
} from '../inputsVariants';
import { joiResolver } from "@hookform/resolvers/joi";
import { schema } from '../../utils/validation/quest.validation';
import { clearRandomForm, fillRandomForm } from '../../utils/ansvers.random';
import { questActions } from '../../redux';


const QuestFormComponent = () => {
        const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<IQuest>({ mode: 'all', resolver: joiResolver(schema) })
        const dispatch = useAppDispatch();

        const onSubmit: SubmitHandler<IQuest> = async (data) => {
            console.log('data = ', data)
            // TODO
            await dispatch(questActions.create({ quest: data }))
            reset()
        }


        return (
            <div>
                {/*<h3>Check</h3>*/}
                <button onClick={()=>fillRandomForm(setValue)}>set random values</button>
                <button onClick={()=>clearRandomForm(setValue)}>clear all values</button>
                <div className={css.container}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <InputTextComponent props={{ ...firstNameAsk, register, errors }}/>
                        <InputTextComponent props={{ ...phoneNumberAsk, register, errors }}/>
                        <InputTextComponent props={{ ...emailAsk, register, errors }}/>

                        <InputTextComponent props={{ ...companyNameAsk, register, errors }}/>
                        <InputTextComponent props={{ ...serviceAreaAsk, register, errors }}/>
                        <InputTextComponent props={{ ...currentWebAsc, register, errors }}/>

                        <CheckBoxComponent props={{ ...chanelSpeakAsc, register, errors }}/>
                        <InputRadioComponent props={{ ...visitSpeakAsk, register, errors }}/>

                        <InputRadioComponent props={{ ...needToDoAsk, register, errors }}/>
                        <InputRadioComponent props={{ ...designWebAsk, register, errors }}/>
                        <CheckBoxComponent props={{ ...contentWebAsk, register, errors }}/>


                        <InputNumberComponent props={{ ...termAsc, register, errors }}/>
                        <InputNumberComponent props={{ ...budgetAsc, register, errors }}/>
                        <InputDateComponent props={{ ...startAsc, register, errors }}/>
                        <br/>
                        <AreaTextComponent props={{ ...uniqueProductAsc, register, errors }}/>

                        <AreaTextComponent props={{ ...aboutClientsAsc, register, errors }}/>
                        <AreaTextComponent props={{ ...aboutCompetitorsAsc, register, errors }}/>

                        <AreaTextComponent props={{ ...elementsWebAsc, register, errors }}/>
                        <AreaTextComponent props={{ ...pagesWebAsc, register, errors }}/>
                        <AreaTextComponent props={{ ...functionalWebAsc, register, errors }}/>

                        <AreaTextComponent props={{ ...forgotAsc, register, errors }}/>

                        <input type={'submit'} value="Submit"/>
                    </form>
                </div>
            </div>


        );
    }
;

export { QuestFormComponent };