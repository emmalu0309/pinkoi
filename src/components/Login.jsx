import { useEffect, useState } from "react";
// import { signInWithRedirect, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import catimg from "../img/Cat.png"
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth
} from "firebase/auth";

const Login = () => {
    //   const [hasWelcomed, setHasWelcomed] = useState(false); // 用於追蹤是否已顯示過歡迎消息

    //   useEffect(() => {
    //     const checkRedirectResult = async () => {
    //       try {
    //         // 檢查重定向結果
    //         const result = await getRedirectResult(auth);
    //         if (result && !hasWelcomed) {
    //           alert(`歡迎1, ${result.user.displayName}`);
    //           setHasWelcomed(true); // 標記已顯示歡迎消息
    //         }
    //       } catch (error) {
    //         console.error("重定向處理失敗：", error);
    //       }
    //     };

    //     checkRedirectResult();

    //     // 監聽用戶狀態變化，避免重複歡迎
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //       if (user && !hasWelcomed) {
    //         console.log("監聽到用戶登入：", user);
    //         alert(`歡迎2, ${user.displayName}`);
    //         setHasWelcomed(true); // 標記已顯示歡迎消息
    //       }
    //     });

    //     return () => unsubscribe(); // 清理監聽器
    //   }, [hasWelcomed]);

    //   const handleGoogleLogin = () => {
    //     signInWithRedirect(auth, provider);
    //   };

    //   return (
    //     <div>
    //       <h1> 登入</h1>
    //       <button onClick={handleGoogleLogin}>使用 Google 登入</button>
    //     </div>
    //   );
    // };
    // Google 登入
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        // provider.addScope("https://www.googleapis.com/auth/userinfo.email");
        // provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
        
        provider.setCustomParameters({
            prompt: "consent", // 強制顯示授權頁面
        });
        try {
            const result = await signInWithPopup(auth, provider);
            if (result && result.user) {
                alert(`歡迎, ${result.user.displayName}`); // 顯示歡迎訊息
                console.log("Google 登入成功：", result.user);
            } else {
                console.error("Google 登入未返回用戶資訊");
            }
        } catch (error) {
            console.error("Google 登入失敗：", error.message);
        }

    };

    // Facebook 登入
    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        provider.addScope('email');
        provider.setCustomParameters({'display':'popup'});
        // console.log("Facebook 登入：", provider);
        // try {
        //     const result = await signInWithPopup(auth, provider);
        //     const credential = FacebookAuthProvider.credentialFromResult(result);
        //     console.log("Facebook credential: ", credential);
        //     const accessToken = credential.accessToken;
        //     console.log("Facebook result: ", result);
        //     console.log("Facebook 登入成功：", result.user);
        // } catch (error) {
        //     console.error("Facebook 登入失敗：", error.message);
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.customData.email;
        //     // The AuthCredential type that was used.
        //     const credential = FacebookAuthProvider.credentialFromError(error);
        // }
        console.log("Facebook auth: ", auth);
        console.log("Facebook provider: ", provider);

        signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log("Facebook user: ", user);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
    };

    // Email 登入
    const handleEmailLogin = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log("Email 登入成功：", result.user);
        } catch (error) {
            console.error("Email 登入失敗：", error.message);
        }
    };

    // Email 註冊
    const handleEmailSignup = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Email 註冊成功：", result.user);
        } catch (error) {
            console.error("Email 註冊失敗：", error.message);
        }
    };

    return (
        // <div style={{ padding: "20px" }}>
        //     <h1>Firebase Authentication 範例</h1>
        //     <button onClick={handleGoogleLogin}>使用 Google 登入</button>
        //     <button onClick={handleFacebookLogin}>使用 Facebook 登入</button>
        //     <div>
        //         <h2>電子郵件登入</h2>
        //         <button
        //             onClick={() => handleEmailSignup("test@example.com", "password123")}
        //         >
        //             註冊 (Email)
        //         </button>
        //         <button
        //             onClick={() => handleEmailLogin("test@example.com", "password123")}
        //         >
        //             登入 (Email)
        //         </button>
        //     </div>
        // </div>
        <div className="flex justify-center">
            <div className="w-[50%]">
                <div className="mx-auto w-max text-4xl">pinkoi</div>
                <div className="w-[30%] mx-auto h-[120px]">
                    <img src={catimg} alt="貓咪圖片" className="w-full h-full object-cover" />
                </div>
                <div className="mx-auto w-[30%] my-2 ">Design The Way You Are</div>
                <div className="w-[50%] mx-auto px-2 flex border items-center focus-within:border-2 focus-within:border-[#2e90b7]" tabIndex="0">
                    <CiUser />
                    <input type="text" className=" ml-2 p-1 outline-none w-full" placeholder="請輸入信箱" />
                </div>
                <div className="w-[50%] mx-auto px-2 flex my-4 border items-center focus-within:border-2 focus-within:border-[#2e90b7]">
                    <CiLock />
                    <input type="password" className=" ml-2 p-1 outline-none w-full" placeholder="請輸入密碼" />
                </div>
                <div className="w-full flex justify-center items-center">
                    <button className="w-[50%]  flex items-center justify-between px-4 py-2 border border-gray-400 rounded-lg hover:bg-[#f7f7f8]"
                        onClick={handleGoogleLogin}>
                        <FcGoogle size={25} />
                        <span className="absolute left-1/2 -translate-x-1/2">使用Google登入</span>
                    </button>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                    <button className="w-[50%]  flex items-center justify-between px-4 py-2 border border-gray-400 rounded-lg hover:bg-[#f7f7f8]"
                    onClick={handleFacebookLogin}>
                        <FaFacebook className="text-[#1677f2]" size={25} />
                        <span className="absolute left-1/2 -translate-x-1/2">使用Facebook登入</span>
                    </button>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                    <button className="w-[50%] flex items-center justify-between px-4 py-2 border border-gray-400 rounded-lg hover:bg-[#f7f7f8]">
                        <FaLine className="text-[#34ce34]" size={25} />
                        <span className="absolute left-1/2 -translate-x-1/2">使用Line登入</span>
                    </button>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                    <button className="w-[50%] flex items-center justify-between px-4 py-2 border border-gray-400 rounded-lg hover:bg-[#f7f7f8]">
                        <FaApple size={25} />
                        <span className="absolute left-1/2 -translate-x-1/2">使用Apple登入</span>
                    </button>
                </div>


            </div>

        </div>
    );
};


export default Login;