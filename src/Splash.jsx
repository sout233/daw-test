import { Link } from "react-router-dom/cjs/react-router-dom.min";
import QnA from "./QnA";

function Splash() {
    return (<>
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold hover:animate-spin">测测哪款DAW</h1>
                    <h1 className="text-5xl font-bold hover:animate-ping">更适合你</h1>
                    <div className="py-4">
                        <p>仅供娱乐 WIP</p>
                        <p>dev. by sout_Nantang</p>
                        <div className="justify-center items-center flex flex-row pt-2 space-x-2">
                            <a href="https://github.com/sout233/daw-test-web">
                                <svg className="w-8 h-8 opacity-80 fill-base-content hover:opacity-100" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4234" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="4235"></path></svg>
                            </a>
                            <a href="https://space.bilibili.com/230275560">
                                <svg className="w-8 h-8 opacity-80 fill-base-content hover:opacity-100" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5219" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 0 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.114667 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="5220"></path></svg>
                            </a>
                            <a href="https://x.com/sout_Nantang">
                                <svg className="w-8 h-8 opacity-80 fill-base-content hover:opacity-100" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7148" width="200" height="200"><path d="M868.78260513 350.93851167c-4.19752479 316.58112364-206.64378348 533.42289687-508.84923077 547.04005471-124.62575954 5.70639316-214.91280228-34.551102-293.48715213-84.46745527 92.10982108 14.70125585 206.32520569-22.11723305 267.41045242-74.40833277-90.28704274-8.78247749-143.74276011-54.7393641-168.7552-128.69725356 26.08953618 4.51026781 53.57474644 3.31414245 78.36079771-1.93480569-81.47305755-27.27282508-139.65259487-77.62795213-142.6586621-183.14254588 22.8629151 10.40920798 46.6967339 20.19409687 78.36079772 22.12306782-60.97321937-34.68180056-106.05956011-161.46291966-54.42078633-245.29788718 90.49359316 99.18854928 199.34683533 180.12947692 378.08647293 191.07898346-44.87512251-191.83050029 209.33127293-295.85489687 315.7222473-166.92541994 44.97431338-8.70079088 81.58158405-25.7639567 116.79551453-44.33599088-14.49353846 44.54837607-42.40585299 75.68030997-76.43065983 100.58539031 37.3506188-5.04239772 70.41152364-14.16912593 98.65525243-28.12469971-17.51944388 36.39255157-55.82929687 69.02751909-88.78984388 96.50689458z" fill="#2C2C2C" p-id="7149"></path></svg>
                            </a>
                        </div>
                    </div>
                    <Link className="btn btn-primary w-40" to="/ex">开始测试</Link>
                    <div className="flex flex-col justify-center items-center translate-y-40">
                        <p className="text-sm text-base-content opacity-50 p-2 animate-bounce">万一下面还有东西呢</p>
                        <svg class="w-10 h-10 animate-bounce" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4235" width="200" height="200"><path d="M830.24 340.688l11.328 11.312a16 16 0 0 1 0 22.624L530.448 685.76a16 16 0 0 1-22.64 0L196.688 374.624a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l288.496 288.496 288.512-288.496a16 16 0 0 1 22.624 0z" fill="#000000" p-id="4236"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="divider">Q&A</div>
        <QnA></QnA>
    </>);
}

export default Splash;
