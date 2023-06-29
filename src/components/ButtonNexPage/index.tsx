import './style.css';

type Props = {
    name: string;
}


export default function ButtonNexPage({name}: Props) {

    return (
        <div className="dsc-btn-next-page">
            {name}
        </div>
    );
}