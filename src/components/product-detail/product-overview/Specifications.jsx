import styles from "@style/product-detail/product-overview/Specifications.module.css";

const Specifications = () => {
  return (
    <div className={styles.box}>
      <div className={styles["description-top"]}>
        <p>
          This Apple MacBook Pro (MPXQ2LL/A) has a high-resolution LED-backlit 13.3-inch widescreen
          Retina display (2560 x 1600 native resolution). Powered by Intel Core i5 (2.3GHz) and
          Intel Iris Plus Graphics 640. Solid State Drive capacity of 256GB with 8GB of RAM.
          Supports Mac OS. Bundle includes Black Case, Wireless Mouse, and Bluetooth Headset! This
          device has been tested to be in great working condition. It will show signs of use and
          cosmetic blemishes which may included some scratched/dings, all of which do not affect the
          usability of this device. (Refurbished)
        </p>
      </div>
      <div className={styles["dimensions-info"]}>
        <div className={styles["dimensions"]}>
          <h3>Dimensions & Weight</h3>
          <div>
            <ol>
              <li>Width: 356.78 mm (14.05 in.)</li>
              <li>Height: 15.67 mm – 18.30 mm (0.62 in. – 0.72 in.)</li>
              <li>Depth: 251.90 mm (9.92 in.)</li>
              <li>Weight (minimum): 1.90 kg (4.19 lbs.)</li>
            </ol>
          </div>
        </div>
        <div className={styles["box-img"]}>
          <img
            src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/10/product-detail-1.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles["dimensions-info"]}>
        <div className={styles["box-img"]}>
          <img
            src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/10/product-detail-2.png"
            alt=""
          />
        </div>
        <div className={styles["dimensions"]}>
          <h3>Better performance. More productivity.</h3>
          <div>
            <p>
              Thanks to 13th Gen Intel® Core™ processors, this laptop runs at peak performance to
              get you through the day. Doing some graphics-heavy work? Optional NVIDIA® RTX 2050
              Graphics (coming soon) give you the boost you need.
            </p>
            <p>
              Enjoy a fast, smooth PC performance without sacrificing power thanks to LPDDR5 memory.
              And with dual heat pipes your device stays nice, cool and performing at its best.
              Meanwhile, adaptive thermals optimize power according to your device’s location,
              whether it’s on a stable surface like a desk or an unstable surface like your lap.
              Using advanced algorithms and accelerometers, your device intelligently adapts its
              power and thermal profiles to the situation to keep your device running smoothly.
            </p>
            <p>
              Stay focused with 4 sided narrow borders and FHD+ display with DC Dimming, which
              reduces flicker for a comfortable viewing experience. Plus, this TÜV Rheinland
              certified laptop with Dell ComfortView software technology helps reduce harmful blue
              light emissions to optimize eye comfort over extended screen time.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className={styles["dimensions-info"]}>
        <div className={styles["dimensions"]}>
          <h3>Stay secure.</h3>
          <div>
            <p>
              The Trusted Platform Module 2.0 is a commercial-grade security chip installed on the
              motherboard that creates and stores passwords and encryption keys. It verifies that
              the computer has not been tampered with before booting up and protects your data
              against external software attacks.
            </p>
            <p>
              Get added peace-of-mind with the fingerprint reader that allows you to securely log in
              with a touch, while a mechanical shutter on the camera protects your privacy and
              prevents accidental embarrassments.
            </p>
          </div>
        </div>
        <div className={styles["box-img"]}>
          <img
            src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/10/product-detail-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Specifications;
