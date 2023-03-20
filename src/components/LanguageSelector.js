import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

function LanguageSelector(props) {
  const { t } = useTranslation();

  const [langVal, setLangVal] = useState("en");
  const [islangEN, setlangEN] = useState(false);
  const [islangHI, setlangHI] = useState(false);

  useEffect(() => {
    let val = localStorage.getItem("lng") || "en";

    if (!val) {
      localStorage.setItem("lng", "en");
    }
    setLangVal(val);

    val === "en" ? setlangEN(true) : setlangEN(false);
    val === "hi" ? setlangHI(true) : setlangHI(false);
  }, []);

  const setLanguage = (e) => {
    let lang = e.target.value;
    localStorage.setItem("lng", lang);
    setLangVal(lang);

    lang === "en" ? setlangEN(true) : setlangEN(false);
    lang === "hi" ? setlangHI(true) : setlangHI(false);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t("Choose Language")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.container}>
        <input
          type="radio"
          name="radio"
          value={"en"}
          defaultChecked={islangEN}
          onChange={setLanguage}
        />
        <label style={styles.check}>Eng(English)</label>
        <br />
        <input
          type="radio"
          name="radio"
          value={"hi"}
          defaultChecked={islangHI}
          onChange={setLanguage}
        />
        <label>हिंदी(Hindi)</label>
      </Modal.Body>
    </Modal>
  );
}

export default LanguageSelector;

const styles = {
  container: {
    display: "block",
    position: "relative",
    paddingLeft: 40,
    marginBottom: 20,
    cursor: "pointer",
    fontSize: 25,
    // border: '1px solid red',
  },

  input: {
    position: "absolute",
    opacity: "0",
    cursor: "pointer",
    border: "1px solid red",
  },

  // check: {
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   height: 30,
  //   width: 30,
  //   backgroundColor: 'lightgray',
  //   borderRadius: '50%',
  // },
};
