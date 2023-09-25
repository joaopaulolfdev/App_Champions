import styles from './Cadastra.module.css'
import Input from '../form/Input'
import Poll from '../pollChampions/Poll'
import pollSoccer from '../img/pollSoccer.png'
import SubmitButton from './SubmitButton'


export default function Cadastrar() {
    return (
        <div className={styles.form}>
            <Poll />
            <img className={styles.poll} src={pollSoccer} alt='Bolão' />
        <form >
            <Input 
            type="text"
            text="Email"
            name="name"
            placeholder="digite seu email"/>
            <Input 
            type="text"
            text="Nome"
            name="name"
            placeholder="digite seu nome"
            />
            <Input 
            type="password"
            text="Digite sua senha"
            name="name"
            placeholder="digite sou senha"
            />
            <Input 
            type="password"
            text="Confirme sua senha"
            name="name"
            placeholder="confimar senha"
            />
        </form>
        <SubmitButton />
        </div>
    )
}