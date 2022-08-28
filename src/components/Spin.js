import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

function Spin() {
    const spinner = useSelector(state => state.appReducer.loading);

    return (
        <div className="loader">
            <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    );
}

export default Spin;
