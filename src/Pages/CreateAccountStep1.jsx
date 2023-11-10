import React from 'react'
import cross from '../image/create-account-1-signup-x.svg'

function CreateAccountStep1() {
    return (
        <div>
            <div>
                <header>
                    <div className="flex items-center py-3 gap-5 self-stretch ">
                        <a href="../src/index.html">
                            <img className="w-6 h-6" src={cross} alt="cross" />
                        </a>
                        <p className="text-neutral-50 font-inter text-15px font-bold leading-normal"> Step 1 of 4 </p>
                    </div>
                </header>
                <main className='w-full'>
                    <div className="flex items-start flex-col gap-5 w-full self-stretch">
                        <p className="text-neutral-50 font-inter text-2xl font-bold leading-normal">Create your account</p>
                        <div className="w-full">
                            <section className>
                                <fieldset className="group flex items-center self-stretch h-16 px-3 py-4 gap-2.5 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
                                    <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Name</legend>
                                    <input type="text" placeholder="Name" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-transparent outline-none placeholder:text-neutral-500" />
                                </fieldset>
                            </section>
                        </div>
                        <div className="w-full">
                            <section className>
                                <fieldset className="group flex items-center self-stretch h-16  px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
                                    <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Email</legend>
                                    <input type="text" placeholder="Email" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-transparent outline-none placeholder:text-neutral-500 " />
                                </fieldset>
                            </section>
                        </div>
                        <div className="gap-0">
                            <p className="text-neutral-50 font-inter text-15px font-bold leading-normal ">Date of birth</p>
                            <p className="text-step-1-text-color self-stretch text-sm font-normal leading-normal  ">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        </div>
                        <div className="flex w-full gap-3 self-stretch">
                            <section className>
                                <fieldset className="group flex items-center self-stretch h-16 w-full px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
                                    <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Month</legend>
                                    <select type placeholder="Month" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-neutral-950 outline-none ">
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </fieldset>
                            </section>
                            <section className>
                                <fieldset className="group flex items-center self-stretch h-16 w-full px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
                                    <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Day</legend>
                                    <select type placeholder="Day" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-neutral-950 outline-none ">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                    </select>
                                </fieldset>
                            </section>
                            <section className>
                                <fieldset className="group flex items-center self-stretch h-16 w-full px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
                                    <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Year</legend>
                                    <select type placeholder="Year" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-neutral-950 outline-none">
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                        <option>2006</option>
                                        <option>2005</option>
                                        <option>2004</option>
                                        <option>2003</option>
                                        <option>2002</option>
                                        <option>2001</option>
                                        <option>2000</option>
                                    </select>
                                </fieldset>
                            </section>
                        </div>
                    </div>
                    <a className="flex justify-end items-center fixed bottom-10 w-full pr-9" href="../src/Create_Your_Account_Step_2.html">
                        <button className=" flex justify-center items-center w-full px-6 py-2 gap-2.5 rounded-4xl bg-neutral-50 shadow-08160 backdrop-blur-xl text-center font-inter text-base font-bold hover:bg-neutral-200 ">Create account</button>
                    </a>
                </main>
            </div>

        </div>
    )
}

export default CreateAccountStep1