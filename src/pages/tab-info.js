import Image from 'next/image'
import logo from '../images/logo.png'
import styles from '../styles/tab-info.module.css'

const TabInfo = () => {
    return (
        <div className={styles.containerTabInfo}>
            <div className={styles.contentTabInfo}>
                <div className={styles.containerLogo}>
                    <Image
                        alt='logo'
                        src={logo}
                        width={200}
                        height={'auto'}
                    />
                    <h1>Hoc Vien Ky Thuat Mat Ma</h1>
                </div>
            </div>
            <br />
            <h1>ĐỀ TÀI: Diem Danh Sinh VIen</h1>
            <div className={styles.des}>
                <h3>Họ và tên: Tran Xuan Nghia</h3>
                <h3>Lớp: L03</h3>
                <h3>GVHH: Trieu Vu Van Quan</h3>
                
            </div>
        </div>
    )
}

export default TabInfo