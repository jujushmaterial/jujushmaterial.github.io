# Sanghyeon Ju | Materials & Semiconductor Engineering Portfolio

## Portfolio Summary

| No. | Portfolio | Period | Status | Link |
|---:|---|---|---|---|
| 1 | TCAD pMOS Process Optimization | 2026.03–2026.06 | Completed | [Project Page](https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/) / [Repository](https://github.com/jujushmaterial/TCAD-pMOS-process-optimization) |
| 2 | Vivado Verilog Traffic Signal Controller | 2026.05 | Completed | [Project Page](https://jujushmaterial.github.io/vivado-traffic-signal-controller/) / [Repository](https://github.com/jujushmaterial/vivado-traffic-signal-controller) |
| 3 | Logic-to-Layout AI Tutor | 2026.06–2026.07 | Completed | [Project Page](https://github.com/jujushmaterial/logic-to-layout-tutor-portfolio) / [Web App](https://logic-to-layout-tutor.vercel.app/) / [Demo](https://www.youtube.com/watch?v=6UpYdEnMlKQ) |

**Summary:**  
This table provides direct access to completed portfolio projects, their development periods, and detailed project pages.

---

## Education

**Soongsil University**  
B.S. Student in Materials Science and Engineering  
Double Major in Next-Generation Semiconductor Engineering

Relevant academic background:

- Materials science and engineering
- Semiconductor devices and processes
- Digital logic circuit and basic hardware design
- Materials characterization and analysis

---

## Skills & Interests

- Semiconductor Devices
- Semiconductor Processes
- Materials Engineering
- TCAD Device/Process Simulation — Synopsys Sentaurus (Workbench, SProcess, SDevice, SVisual)
- Python
- Vibe Coding / AI-Assisted Development

---

## Portfolio Projects

### 1. [TCAD pMOS Process Optimization](https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/)

**Topic:** pMOS process conversion and multi-objective optimization using Sentaurus TCAD  
**Period:** 2026.03–2026.06  
**Status:** Completed  
**Tools:** Sentaurus Workbench, SProcess, SDevice, SVisual  
**Project Page:** [View Project Page](https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/)  
**Repository:** [View Repository](https://github.com/jujushmaterial/TCAD-pMOS-process-optimization)  
**Report:** [View Public Report](https://github.com/jujushmaterial/TCAD-pMOS-process-optimization/blob/main/report/pmos_process_optimization_report.pdf)

기존 SimpleMOS nMOS 예제를 pMOS 공정으로 변환하고, LDD, Source/Drain, RTA, Spacer 조건을 최적화한 TCAD 프로젝트입니다. SProcess, SDevice, SVisual command를 수정하고 `Ion`, `Ioff`, `SS`, `Vtgm`, `gm`을 자동 추출했습니다.

개별 수치 비교와 `Ion/Ioff–SS` 그래프 기반 최적화를 각각 수행했습니다. 그래프 기반 조건은 수치 비교 조건보다 Ion은 약 9.2% 낮았지만 Ioff를 약 68.1% 줄이고 SS도 개선해 최종 소자로 선정했습니다.

**Summary:**  
This project converts a SimpleMOS nMOS process into a pMOS flow and compares numerical and `Ion/Ioff–SS` optimization methods. The final device meets the Ion, Ioff, SS, and Vtgm targets.

주요 내용은 다음과 같습니다.

- nMOS-to-pMOS process polarity conversion
- NWell and BF2 implant implementation
- RTA and spacer parameterization
- pMOS negative-bias SDevice sweep
- SVisual-based Ion, Ioff, SS, Vtgm, and gm extraction
- Thirteen TDR process checkpoints
- Numerical and plot-based DOE optimization
- Final device selection and target verification

---

### 2. [Vivado Verilog Traffic Signal Controller](https://jujushmaterial.github.io/vivado-traffic-signal-controller/)

**Topic:** FSM-based traffic signal controller using Verilog and Vivado  
**Period:** 2026.05  
**Status:** Completed  
**Tools:** Vivado, Verilog  
**Project Page:** [View Project Page](https://jujushmaterial.github.io/vivado-traffic-signal-controller/)  
**Repository:** [View Repository](https://github.com/jujushmaterial/vivado-traffic-signal-controller)

Verilog와 Vivado를 이용해 FSM 기반 Traffic Signal Controller를 개선한 디지털 논리 설계 프로젝트입니다. Emergency Mode, Country Road Green Time Limit, Night OFF Mode를 구현하고 testbench와 behavioral simulation으로 검증했습니다.

**Summary:**  
This project implements an improved FSM-based traffic signal controller using Verilog and Vivado, focusing on HDL design, testbench construction, and waveform-based verification.

주요 학습 내용은 다음과 같습니다.

- Verilog module and I/O structure
- State register, next-state logic, and Moore output logic
- Counter-based time limitation
- Emergency priority and night-mode control
- Testbench scenario construction
- Vivado behavioral simulation and waveform analysis

---

### 3. [Logic-to-Layout AI Tutor](https://github.com/jujushmaterial/logic-to-layout-tutor-portfolio)

**Topic:** AI-powered interactive logic-to-layout learning web app  
**Period:** 2026.06–2026.07  
**Status:** Completed  
**Tools:** HTML, CSS, JavaScript, Vercel, Supabase, OpenAI API, GitHub  
**Project Page:** [View Project Page](https://github.com/jujushmaterial/logic-to-layout-tutor-portfolio)  
**Web App:** [Open Web App](https://logic-to-layout-tutor.vercel.app/)  
**Demo Video:** [Watch Demo](https://www.youtube.com/watch?v=6UpYdEnMlKQ)

Truth Table, Gate Circuit, CMOS Schematic, Layout으로 이어지는 디지털 논리 학습 과정을 하나의 인터랙티브 웹앱으로 구현했습니다. AI Tutor, 자동 저장, 점수·랭킹, 학습 리포트 기능을 포함합니다.

**Summary:**  
This project connects truth tables, gate circuits, CMOS schematics, and layout practice into one interactive learning workflow with AI tutoring and learning-data features.

주요 구현 내용은 다음과 같습니다.

- Truth Table and Gate Circuit practice
- CMOS Schematic visualization
- Layer-based Layout Lab
- Electrical extraction and error feedback
- OpenAI API-based AI Tutor
- Supabase-based login, saving, scoring, and ranking
- Vercel deployment and iterative AI-assisted development

---

## Portfolio Direction

각 프로젝트는 다음 흐름으로 정리합니다.

1. Problem definition
2. Background theory
3. Design or analysis approach
4. Simulation, experiment, or implementation process
5. Result comparison
6. Interpretation and technical insight
7. Limitations and future improvement points
