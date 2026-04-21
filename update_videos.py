#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Atualiza as abas de vídeo de todos os produtos do site Garrett Brasil.
Substitui vídeos locais e IDs genéricos por embeds YouTube oficiais.
"""

import os, re

BASE = os.path.dirname(os.path.abspath(__file__))
PROD = os.path.join(BASE, "produtos")

IFRAME = (
    '<iframe src="https://www.youtube.com/embed/{vid}" '
    'title="{title}" frameborder="0" '
    'allow="accelerometer; autoplay; clipboard-write; encrypted-media; '
    'gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>'
)

def video_item(vid, title, desc):
    return f'''            <div class="prod-video-item">
              <h3 class="prod-video-item__title"><i class="fa-brands fa-youtube"></i> {title}</h3>
              <p class="prod-video-item__desc">{desc}</p>
              <div class="prod-video-item__embed">
                {IFRAME.format(vid=vid, title=title)}
              </div>
            </div>'''

def video_tab(items):
    inner = "\n".join(items)
    return f'''        <!-- Tab: Vídeos -->
        <div class="prod-tab-panel" id="tab-videos">
          <div class="prod-videos">
{inner}
          </div>
        </div>'''

def video_tab_hidden():
    return '''        <!-- Tab: Vídeos -->
        <div class="prod-tab-panel" id="tab-videos" style="display:none">
          <div class="prod-videos"></div>
        </div>'''

# ─────────────────────────────────────────────────────────────
# MAPA DE VÍDEOS POR PRODUTO
# ─────────────────────────────────────────────────────────────
VIDEOS = {

"ace-200i.html": {
    "show": True,
    "items": [
        video_item("VCT9lB-uVt8", "ACE 200i — Vídeo Instrucional Oficial",
            "Aprenda a montar, ligar e usar todos os recursos do ACE 200i: target ID, modos de áudio e muito mais."),
        video_item("PNAL9Qhe3xE", "ACE 200i — Guia Completo (Versão Internacional)",
            "Instruções completas para a versão internacional do ACE 200i, cobrindo configuração, discriminação e detecção."),
    ]
},

"ace-300i.html": {
    "show": True,
    "items": [
        video_item("BuDKnfzfKCI", "ACE 300i — Vídeo Instrucional Oficial",
            "Guia completo do ACE 300i: montagem, partida, target ID, Iron Audio e ajuste de sensibilidade."),
        video_item("a9EiA6sYz0E", "ACE 300i — Instruções Versão Internacional",
            "Vídeo oficial Garrett cobrindo todos os recursos do ACE 300i, incluindo os 8 segmentos de discriminação."),
    ]
},

"ace-400i.html": {
    "show": True,
    "items": [
        video_item("QUb5XVCDxAI", "ACE 400i — Instruções Parte 1",
            "Montagem, ligar/desligar, factory reset, target ID e recursos de áudio do ACE 400i."),
        video_item("ub79BhaKaHs", "ACE 400i — Instruções Parte 2",
            "Padrões de discriminação, notch discrimination, ajuste de frequência, sensibilidade e pinpointing."),
    ]
},

"ace-apex.html": {
    "show": True,
    "items": [
        video_item("BueU43-RFlU", "ACE Apex — Apresentação Oficial Garrett",
            "Introdução oficial do ACE Apex: o primeiro detector da linha ACE com tecnologia multifrequência simultânea."),
        video_item("6pTuHcv81Aw", "Multi-Flex™ — Tecnologia Multifrequência em Detalhes",
            "Mergulhe fundo na tecnologia Multi-Flex™ e entenda por que múltiplas frequências simultâneas mudam tudo na detecção."),
        video_item("FUL2v2tRGzs", "ACE Apex — Iron Masking e Target ID",
            "Como usar o controle de volume de ferro e entender o target ID para filtrar sinais indesejados com eficiência."),
    ]
},

"at-gold.html": {
    "show": True,
    "items": [
        video_item("ijDaYVln-uo", "AT Gold — Instruções Parte 1",
            "Montagem, partida, target ID, sensibilidade e ajuste de frequência com o narrador oficial Garrett Steve Moore."),
        video_item("LE9Ar1LONGc", "AT Gold — Instruções Parte 2",
            "Ground balance, ground balance window e ajuste de threshold para condições desafiadoras de solo."),
    ]
},

"at-max.html": {
    "show": True,
    "items": [
        video_item("nF6KSr9ik5A", "AT Max — Instruções Parte 1",
            "Montagem, controles básicos e introdução ao AT Max — o detector AT mais avançado da Garrett."),
        video_item("I6FlnyEgboE", "AT Max — Instruções Parte 2 (Z-Lynk Wireless)",
            "Operação do sistema wireless Z-Lynk, tones de alvo e configurações avançadas do AT Max."),
        video_item("m1acq2zV2zQ", "AT Max — Apresentação Oficial",
            "Vídeo promocional oficial do Garrett AT Max com demonstração de recursos em campo."),
    ]
},

"at-pro.html": {
    "show": True,
    "items": [
        video_item("re8pd5se3c4", "AT Pro — Instruções Parte 1",
            "Introdução, montagem, partida, target ID e tone ID do lendário AT Pro da Garrett."),
        video_item("EBkPsWdSesw", "AT Pro — Instruções Parte 2",
            "Modos de detecção, ground balance, sensibilidade e configurações avançadas do AT Pro."),
        video_item("buxjNWjETSk", "AT Pro Basics — Série Oficial Garrett",
            "Série oficial Garrett de tutoriais: partida, factory reset e modos de detecção com demonstração prática."),
    ]
},

"axiom.html": {
    "show": True,
    "items": [
        video_item("J8ssnlUPkaA", "AXIOM — Primeiros Passos Oficiais",
            "Guia oficial Garrett para começar a usar o AXIOM — o detector de ouro por pulso induzido mais avançado da marca."),
        video_item("NnTZYeejLKQ", "AXIOM — A Máquina de Ouro Mais Poderosa da Garrett",
            "Apresentação completa do AXIOM como a máquina de ouro mais potente e avançada já fabricada pela Garrett."),
        video_item("LlfcPxfKl7g", "AXIOM — Encontre Mais Ouro!",
            "Técnicas e dicas práticas para maximizar resultados na prospecção de ouro com o AXIOM em campo real."),
    ]
},

"contramina.html": {
    "show": True,
    "items": [
        video_item("v1Q1OOp3l4Y", "Recon Pro AML-1000 — Visão Geral Oficial",
            "Visão geral do AML-1000, localizador de todos os metais projetado para operações de desminagem em campo."),
    ]
},

"garrett-guide.html": {
    "show": True,
    "items": [
        video_item("bMxo9-h2Asg", "Garrett Guide — Apresentação Oficial",
            "Introdução ao detector hand-held mais avançado da Garrett: 7 níveis de sensibilidade para segurança profissional."),
        video_item("WgbXBSAJV8k", "Garrett Guide — Visão Geral Completa",
            "Visão geral completa de recursos e aplicações do Garrett Guide em ambientes de segurança de alto desempenho."),
    ]
},

"goldmaster-24k.html": {
    "show": True,
    "items": [
        video_item("kSzW5qMgO1k", "Goldmaster 24K — Apresentação do Detector de Ouro",
            "Conheça o Goldmaster 24K e sua frequência de 48 kHz para detectar micro-pepitas de ouro onde outros detectores falham."),
        video_item("FJqawghNdkg", "Goldmaster 24K — Configurações Básicas de Prospecção",
            "Tutorial oficial das configurações básicas de prospecção para maximizar a performance em campo de ouro."),
        video_item("KZSSlLWF9m8", "Goldmaster 24K Advantage — Série Oficial",
            "Série oficial Garrett mostrando as vantagens competitivas do Goldmaster 24K na prospecção de ouro nativo."),
    ]
},

"multi-zone.html": {
    "show": True,
    "items": [
        video_item("nclxRLx9rTg", "Multi-Zone — Configuração Básica",
            "Guia passo a passo de configuração inicial do pórtico Multi-Zone para operações de segurança."),
        video_item("mFeW6PIqW8w", "Multi-Zone e PD6500i — Setup de Checkpoint",
            "Configuração de checkpoint de segurança com os pórticos Garrett Multi-Zone e PD 6500i."),
        video_item("onNUSIOHqNo", "Multi-Zone — Instalação da Barra de Luz",
            "Instruções oficiais de instalação da barra de luz indicadora do Garrett Multi-Zone."),
    ]
},

"paragon.html": {
    "show": True,
    "items": [
        video_item("QjA3CKPbQFw", "Paragon — Apresentação Oficial",
            "Introdução ao Paragon, pórtico de 66 zonas independentes para segurança de máxima precisão."),
        video_item("PZWPSYakbu0", "Paragon — Demonstração em Ambientes Prisionais",
            "Demonstração real do Paragon detectando metais em ambientes prisionais com alta exigência de segurança."),
    ]
},

"pd-6500i.html": {
    "show": True,
    "items": [
        video_item("JRGV9XjQnhU", "PD 6500i — Operação Básica",
            "Operação básica do PD 6500i: o pórtico detector de metais mais reconhecido mundialmente."),
        video_item("LGZtmLG-MQE", "PD 6500i — Calibração Passo a Passo",
            "Guia oficial de calibração do PD 6500i para garantir máxima precisão em aeroportos e instalações críticas."),
        video_item("NgpEz7jF-Ns", "PD 6500i — Montagem Completa",
            "Instruções completas de montagem e instalação do PD 6500i, direto da Garrett Security."),
    ]
},

"pro-pointer-at.html": {
    "show": True,
    "items": [
        video_item("4jAhfgxp_ME", "Pro-Pointer AT — Vídeo Instrucional Oficial",
            "Recursos e funções do Pro-Pointer AT à prova d'água: o pinpointer mais confiável do mercado."),
        video_item("1po7O40EhdI", "Apresentando o Pro-Pointer AT",
            "Introdução oficial ao Pro-Pointer AT, mostrando todas as funcionalidades do pinpointer waterproof da Garrett."),
    ]
},

"pro-pointer-at-zlynk.html": {
    "show": True,
    "items": [
        video_item("CZCAkUYQvRM", "Pro-Pointer AT Z-Lynk — Instrucional Oficial",
            "Recursos e funções do Pro-Pointer AT Z-Lynk: wireless integrado para pareamento com detectores e fones Garrett."),
        video_item("nzn4AbW7m7s", "10 Motivos para ter o Pro-Pointer AT Z-Lynk",
            "Os 10 melhores motivos para usar o wireless Pro-Pointer AT Z-Lynk emparelhado com AT Max e fones MS-3."),
    ]
},

"pro-pointer-at-blackline.html": {
    "show": True,
    "items": [
        video_item("4jAhfgxp_ME", "Pro-Pointer AT — Instrucional Oficial (Blackline Edition)",
            "A Blackline Edition compartilha a mesma tecnologia AT: assista ao instrucional oficial para dominar todas as funções."),
    ]
},

"pro-pointer-ii.html": {
    "show": False,   # Sem vídeo específico para o modelo II
    "items": []
},

"super-scanner-v.html": {
    "show": True,
    "items": [
        video_item("0UrztOPOFxw", "Super Scanner V — Visão Geral Oficial",
            "O detector hand-held mais reconhecido do mundo: recursos, vantagens e aplicações do Super Scanner V."),
        video_item("lb48MftubAE", "Super Scanner V — Apresentação Completa",
            "Visão geral completa de todos os recursos do Garrett Super Scanner V da Garrett Security."),
        video_item("WN9rEuWzvrY", "Super Scanner V — Técnicas de Inspeção",
            "Tutorial oficial de técnicas corretas de varredura com o Super Scanner V para segurança eficiente."),
    ]
},

"superwand.html": {
    "show": True,
    "items": [
        video_item("Q6fmRwTIPAk", "SuperWand — Visão Geral Oficial",
            "Visão geral do SuperWand com detecção 360° — o hand-held mais sensível da linha Garrett Security."),
        video_item("d7zyioFNyFw", "SuperWand — Apresentação Completa",
            "Apresentação completa de recursos e vantagens do Garrett SuperWand para segurança profissional."),
        video_item("ZTQ2fQPfUdE", "SuperWand — Técnicas de Inspeção",
            "Técnicas oficiais de varredura com o SuperWand para maximizar a eficiência em checkpoints de segurança."),
    ]
},

"thd.html": {
    "show": True,
    "items": [
        video_item("L2Vojge1yKA", "THD — Vídeo Instrucional Oficial",
            "Técnicas de varredura e operação do THD Tactical Hand-Held Detector para uso tático e de segurança."),
        video_item("iIqtoliJKys", "THD — Visão Geral do Detector Tático",
            "Visão geral completa dos recursos do THD, o detector hand-held tático para aplicações militares e de segurança."),
    ]
},

"vortex-csi.html": {
    "show": True,
    "items": [
        video_item("XiWZvIC2pUY", "Garrett CSI — Recuperação de Evidências",
            "Técnicas de recuperação de evidências com detector Garrett CSI: demonstração de metodologia forense em campo."),
    ]
},

"vortex.html": {
    "show": False,   # Sem vídeo específico disponível para a série Vortex VX
    "items": []
},

}

# ─────────────────────────────────────────────────────────────
# REGEX PATTERNS
# ─────────────────────────────────────────────────────────────
TAB_BTN_PATTERN = re.compile(
    r'<button([^>]*?)data-tab="videos"([^>]*?)>(<i[^>]*></i>\s*Vídeos)</button>'
)
TAB_PANEL_PATTERN = re.compile(
    r'<!-- Tab: Vídeos -->\s*<div[^>]+id="tab-videos"[^>]*>.*?</div>\s*</div>',
    re.DOTALL
)

def strip_hidden(attr_str):
    return attr_str.replace(' style="display:none"', '').replace("style=\"display:none\" ", "")

def update_file(filename, config):
    path = os.path.join(PROD, filename)
    if not os.path.exists(path):
        print(f"  SKIP (not found): {filename}")
        return

    with open(path, encoding="utf-8") as f:
        html = f.read()

    original = html
    show = config["show"]
    items = config["items"]

    # 1. Update tab button — show or hide
    def replace_btn(m):
        pre, post, label = m.group(1), m.group(2), m.group(3)
        attrs = strip_hidden(pre + post)
        if not show:
            if 'style="display:none"' not in attrs:
                attrs += ' style="display:none"'
        return f'<button{attrs}data-tab="videos">{label}</button>'

    html = TAB_BTN_PATTERN.sub(replace_btn, html)

    # 2. Replace video tab panel entirely
    if show and items:
        new_panel = video_tab(items)
    else:
        new_panel = video_tab_hidden()

    html = TAB_PANEL_PATTERN.sub(new_panel, html)

    if html == original:
        print(f"  NO CHANGE: {filename}")
        return

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  UPDATED:  {filename}  ({'visible' if show else 'hidden'}, {len(items)} vídeos)")

# ─────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────
print("\n=== Garrett Brasil — Atualização de Vídeos YouTube ===\n")
for fname, cfg in VIDEOS.items():
    update_file(fname, cfg)
print("\n✓ Concluído.\n")
