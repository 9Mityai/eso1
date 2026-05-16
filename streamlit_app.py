import streamlit as st
from dotenv import load_dotenv
from backend.gemini_service import analyze_text

load_dotenv()

st.set_page_config(page_title="ESO Clinical Assistant", page_icon="🩺")
st.title("ESO Clinical Decision Support")
st.write("Paste patient notes and get a clinical analysis powered by Gemini.")

patient_input = st.text_area("Patient input", height=240)

if st.button("Analyze patient text"):
    if not patient_input.strip():
        st.warning("Введите текст пациента для анализа.")
    else:
        with st.spinner("Отправка запроса в Gemini..."):
            try:
                analysis = analyze_text(patient_input)
                st.subheader("Результат анализа")
                st.code(analysis)
            except Exception as error:
                st.error(f"Ошибка: {error}")
