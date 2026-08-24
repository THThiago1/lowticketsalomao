/**
 * ─────────────────────────────────────────────────────────────
 * CONFIGURAÇÃO CENTRAL DA OFERTA
 * ─────────────────────────────────────────────────────────────
 * Altere os dados comerciais em UM ÚNICO LUGAR.
 * Preço, nome, checkout e garantia são lidos deste arquivo
 * por todos os CTAs e seções da página.
 */
export const OFFER = {
  /** Nome comercial do produto */
  productName: "Os 7 Princípios da Prosperidade de Salomão",

  /** Valor em reais (numérico, para lógica futura) */
  price: 67,

  /** Valor formatado para exibição */
  priceDisplay: "R$ 67,00",

  /**
   * URL oficial do checkout (Cakto).
   * Todos os botões de compra (oferta, encerramento e sticky)
   * apontam para este endereço, abrindo na mesma aba.
   */
  checkoutUrl: "https://pay.cakto.com.br/kx6zfx3_1059972",

  /**
   * Política oficial de garantia.
   * Enquanto estiver vazia (""), a área de garantia e a pergunta
   * "Tem garantia?" do FAQ NÃO são exibidas ao público.
   * Ex.: "Você tem 7 dias de garantia incondicional..."
   */
  guaranteeText: "",

  /**
   * Valores individuais de referência de cada material,
   * na mesma ordem da lista da oferta (STACK):
   * Guia 147 · Diagnóstico 67 · Mapa 97 · Plano Pouco a Pouco 67 ·
   * Raio-X 87 · Checklist 57 · Plano Pessoal 68.
   * Soma dos sete valores: R$ 590,00.
   */
  itemValues: [147, 67, 97, 67, 87, 57, 68],

  /** Valor de referência da coleção (soma dos materiais individualmente) */
  collectionReferenceDisplay: "R$ 590,00",
} as const;
