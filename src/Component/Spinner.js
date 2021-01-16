import Spinner from './Spinner.gif'
const SpinnerGif =()=>{
return(
    <div className='loader'>
        <img src={Spinner} alt="Loading"/>
        <h1>Fetching Data</h1>
    </div>
)
}
    export default SpinnerGif