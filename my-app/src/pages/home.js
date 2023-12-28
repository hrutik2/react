import { Curr, Currency, Head } from "../css/home";
const Home=()=>{
    return(
        <div>
            <Currency>
                <h1>Currency Excahnge Platfrom</h1>
               
               <Head>
                <span>Amount:  </span>
                <input type="number" placeholder="amount"/>
               </Head>
              <Curr>
                <div>
                    <span>From : </span>
                    <select>
                            <option value="">select currency</option>
                            <option value="usd">usd</option>
                            <option value="psd">psd</option>
                            <option value="csd">csd</option>
                            <option value="jsd">jsd</option>
                            <option value="msd">msd</option>
                            <option value="ksd">ksd</option>
                            <option value="jsd">jsd</option>
                    </select>
                </div>
                <div>
                    <span>To : </span>
                    <select>
                            <option value="">select currency</option>
                            <option value="usd">usd</option>
                            <option value="psd">psd</option>
                            <option value="csd">csd</option>
                            <option value="jsd">jsd</option>
                            <option value="msd">msd</option>
                            <option value="ksd">ksd</option>
                            <option value="jsd">jsd</option>
                    </select>
                </div>
              </Curr>

                {/* <div>
                    <div>
                        <select>
                            <option value="">select currency</option>
                            <option value="usd">usd</option>
                            <option value="psd">psd</option>
                            <option value="csd">csd</option>
                            <option value="jsd">jsd</option>
                            <option value="msd">msd</option>
                            <option value="ksd">ksd</option>
                            <option value="jsd">jsd</option>
                        </select>
                    </div>
                    <div>
                        <input></input>
                    </div>
                </div> */}
                
                <button  >Convert</button>
               
            
            </Currency>
           
           
        
        
        
        
        
        </div>
       
    )
}
export default Home;