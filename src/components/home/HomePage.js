import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';


class HomePage extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      date: new Date (),
      dark: false,
      lazyItems: [],
      lazyLoading: false,
      selectedCity1: null,
    };

    this.countries = [
      { name: 'Türkiyə', code: 'NY' },
      { name: 'ABŞ', code: 'RM' },
      { name: 'Çin', code: 'LDN' }
    ];

    this.eliveryTypes = [
      { name: 'Adresə çatdırılma', code: 'NY' },
      { name: 'Filiala çatdırılma', code: 'RM' },
    ];

    this.changeDark = this.changeDark.bind(this);

  }
    
  setDate (e) {
    this.setState({date: e});
  }
  changeDark (event) {

    if (this.state.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.setState({dark: !this.state.dark});

  }
  onCityChange(e) {
    this.setState({ selectedCity1: e.value });
  }
  render () {
    return (
      <>

        <header
          className="flex items-center justify-center h-96  bg-fixed bg-center bg-cover bg-no-repeat bg-home-pattern"
        >
          <div className="p-10 text-2xl text-white bg-inputactive bg-opacity-70 rounded-xl font-bold">
            <h1> 
              Kargoo! 
              Ölkə boyu çatdırırıq!
            </h1>
          </div>
        </header>

        <div className="md:container -mt-5 bg-white pt-5 rounded">
          <div className="pt-5 shadow-md">
           <div className="w-full text-left ml-4" >
            <p className="text-blue-400 text-2xl font-bold ">Hesabla</p>
           </div>
            <form className="columns-4 pb-5 px-4">
              <div className="w-full mb-5">
                <label htmlFor="weight">En</label>
                <input type="number" placeholder="sm" className="w-full  border-solid border-2 rounded p-3"/>
              </div>
              <div className="w-full mb-5 break-after-column">
                <label htmlFor="weight">Uzunluq</label>
                <input type="number"  placeholder="sm"  className="w-full  border-solid border-2 rounded p-3"/>
              </div>
              <div className="w-full mb-5">
                <label htmlFor="weight">Hündürlük</label>
                <input type="number"  placeholder="sm"  className="w-full  border-solid border-2 rounded p-3"/>
              </div>
              <div className="w-full mb-5">
                <label htmlFor="weight">Çəki</label>
                <input type="number"  placeholder="kq"  className="w-full  border-solid border-2 rounded p-3"/>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="weight">Ölkəni seçin</label>
                <Dropdown 
                    value={this.state.selectedCity1} 
                    options={this.countries} 
                    onChange={this.onCityChange} 
                    className="w-full"
                    optionLabel="name" placeholder="Ölkəni seçin" />
              </div>
              <div className="w-full mb-5">
                <label htmlFor="weight">Çatdırılma növü</label>
                <Dropdown 
                    value={this.state.selectedCity1} 
                    options={this.eliveryTypes} 
                    onChange={this.onCityChange} 
                    className="w-full"
                    optionLabel="name" placeholder="Çatdırılma növünü seçin" />
              </div>
              <div className="w-full mb-5">
                <label htmlFor="weight">Çəki</label>
                <input type="number" className="w-full  border-solid border-2 rounded p-3"/>
              </div>
              <div className="w-full mb-5">
                <label htmlFor="weight">Qiyməti</label>
                <input type="number" className="w-full  border-solid border-2 rounded p-3"/>
              </div>
            </form>
          </div>
          
        </div>

        <div className="md:container mt-10 text-center">
          <p className="font-bold text-2xl text-maincolor">Əsas Üstünlüklərimiz</p>
          <div className=" w-full mt-5 flex">
              <div className="w-6/12  break-words rounded pr-2">
                

                <div class="flex font-sans bg-white hover:bg-maincolor hover:text-white rounded shadow-2xl">
                  <div class="flex-none w-56 bg-fast-icon bg-no-repeat bg-white relative rounded bg-[length:200px_100px]  bg-center">
                  </div>
                  <p className=" h-48 p-3 text-left break-word ">
                    {/* Sürətli və təhlükəsiz çatdırılma */}
                    Bağlamanız bizim xaricdəki əməkdaşlarımız tərəfindən təhvil alındıqdan sonra göndəriş gününə qədər çeşidlənir, anbarlaşdırılır və qısa müddət ərzində Bakı ofisimizə çatdırılır. Bu müddət ərzində bütün proseslər barədə email, tətbiq və sms vasitəsilə sizə məlumat göndərilir.
                  </p>
                </div>
               
              </div>
              <div className="w-6/12 break-words  rounded pr-2">

                <div class="flex font-sans bg-white hover:bg-maincolor hover:text-white rounded shadow-2xl">
                  <div class="flex-none w-56 bg-save-money-icon bg-no-repeat bg-white relative rounded bg-[length:200px_100px]  bg-center">
                  </div>
                  <p className="  h-48 p-3 text-left break-word">
                    Pula qənaət
                    Bəyəndiyiniz məhsulları Türkiyə, Amerika və Çindən sərfəli qiymətlərlə ölkəmizə gətiririk.
                  </p>
                </div>


              </div>
             
          </div>
          <div className="w-full mt-5 flex">
              <div className="w-6/12 break-words  rounded pr-2">


                  <div class="flex font-sans bg-white hover:bg-maincolor hover:text-white  rounded ">
                    <div class="flex-none w-56 bg-sertificate-icon bg-no-repeat bg-white relative rounded bg-[length:200px_100px]  bg-center">
                    </div>
                    <p className="shadow-2xl h-48 p-3 text-left break-word">
                      {/* Sübut olunmuş təcrübə */}
                      Beynəlxalq daşımalar sahəsində 2010-cu ildən etibarən fəaliyyət göstəririk. Bu istiqamətdə əldə etdiyimiz təcrübəni 2018-ci ildən etibarən kuryer xidmətinin də təşkilində həyata keçirməyə başlamışıq. İndiyədək Türkiyə, Amerika və Çindən yüz minlərlə bağlamanı müştərilərimizə çatdırmışıq.                    </p>
                  </div>

              </div>
              <div className="w-6/12  break-words  rounded pl-2  ">

                <div class="flex font-sans bg-white hover:bg-maincolor hover:text-white rounded ">
                  <div class="flex-none w-56 bg-innovation-icon bg-no-repeat bg-white relative rounded bg-[length:200px_100px]  bg-center">
                  </div>
                  <p className="shadow-2xl h-48 p-3 text-left break-word">
                    {/* İnnovativlik */}
                    İstər yeni texnologiyaların tətbiqi, istərsə də işçi heyətinə mütəmadi treninqlərin verilməsi istiqamətində şirkətimiz davamlı yatırım edir.                  </p>
                </div>
              </div>
          </div>
        </div>

        <div className="md:container mt-10 text-center">
          <p className="font-bold text-2xl text-maincolor"> Xidmətlərimiz</p>
          <div className=" w-full mt-5 flex">
              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="flex flex-col items-center pb-10 mt-4">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" 
                          src={'/assets/services/flag-turkey.svg'} alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Türkiyədən çatdırılma
                        </h5>
                        
                    </div>
                </div>
                
              </div>
              
              
              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="flex flex-col items-center pb-10 mt-4">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" 
                          src={'/assets/services/flag-usa.svg'} alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Amerikadan çatdırılma
                        </h5>
                        
                    </div>
                </div>
                
              </div>

              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="flex flex-col items-center pb-10 mt-4">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" 
                          src={'/assets/services/flag-china.svg'} alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Çindən çatdırılma
                        </h5>
                        
                    </div>
                </div>
                
              </div>

              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="flex flex-col items-center pb-10 mt-4">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" 
                          src={'/assets/services/flag-turkey.svg'} alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Həvalə Et (Türkiyədən)
                        </h5>
                        
                    </div>
                </div>
                
              </div>

              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="flex flex-col items-center pb-10 mt-4">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" 
                          src={'/assets/services/refund.svg'} alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Geri qaytarma
                        </h5>
                        
                    </div>
                </div>
                
              </div>

             

              

             

              

              
             
          </div>
          
        </div>

        <div className="md:container mt-10 text-center">
          <p className="font-bold text-2xl text-maincolor"> Ən son yeniliklər</p>
          <div className=" w-full mt-5 flex">
              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="object-cover h-48 w-full rounded-t-lg" src={'/assets/news/xeber1.jpg'} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Türkiyə saytlarında böyük endirim var
                          </h5>
                      </a>                   
                  </div>
                </div>
                
              </div>
              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="object-cover h-48 w-full rounded-t-lg" src={'/assets/news/xeber2.png'} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              Bağlamam qutuda qalsın!
                          </h5>
                      </a>                   
                  </div>
                </div>
                
              </div>
              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="object-cover h-48 w-full rounded-t-lg" src={'/assets/news/xeber3.png'} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            GOEx ilə çatdırılma et, 5% keşbek əldə et!
                          </h5>
                      </a>                   
                  </div>
                </div>
                
              </div>
              <div className="w-3/12  break-words rounded pr-2">
                
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="object-cover h-48 w-full rounded-t-lg" src={'/assets/news/xeber4.png'} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Həcm çəkisi ilə yox fiziki çəki ilə çatdırılma!
                          </h5>
                      </a>                   
                  </div>
                </div>
                
              </div>
              
             
          </div>
          
        </div>
       
       
       

        <button onClick={this.changeDark}>Dark ele</button>
      </>
    )
  }
  
  
}

export default HomePage;
