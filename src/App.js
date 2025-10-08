import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Terminal, Code, GitBranch, Database, Bot, TrendingUp, FileText, Send, Zap } from 'lucide-react';

const PrismPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 슬라이드 1: 타이틀
    {
      title: "프리즘 인사이트",
      subtitle: "코드 구조 & 실행 흐름 분석",
      type: "title",
      content: (
          <div className="text-center space-y-8">
            <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              PRISM-INSIGHT
            </div>
            <div className="text-3xl text-gray-600">
              AI 기반 주식 분석 시스템 - 코드 구조 완전 분석
            </div>
            <div className="flex justify-center gap-8 mt-12">
              <div className="flex items-center gap-3 text-xl">
                <Terminal className="w-8 h-8 text-blue-500" />
                <span>오케스트레이터</span>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <Bot className="w-8 h-8 text-purple-500" />
                <span>텔레그램 봇</span>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 2: 실행 명령어와 진입점
    {
      title: "1. 실행 명령어와 진입점",
      icon: <Terminal className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                1-1. 메인 오케스트레이터
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                python stock_analysis_orchestrator.py --mode morning
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">1.</span>
                  <div>
                    <span className="font-semibold">stock_analysis_orchestrator.py</span>
                    <p className="text-gray-600">메인 오케스트레이터 시작</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">2.</span>
                  <div>
                    <span className="font-semibold">is_market_day()</span>
                    <p className="text-gray-600">휴일 체크 → 휴일이면 종료</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">3.</span>
                  <div>
                    <span className="font-semibold">120분 타이머 스레드</span>
                    <p className="text-gray-600">백그라운드에서 타임아웃 관리</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">4.</span>
                  <div>
                    <span className="font-semibold">asyncio.run(main())</span>
                    <p className="text-gray-600">비동기 메인 함수 호출</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                1-2. 텔레그램 봇 (24시간 상시 운영)
              </h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                python telegram_ai_bot.py
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">1.</span>
                  <div>
                    <span className="font-semibold">TelegramAIBot 초기화</span>
                    <p className="text-gray-600">봇 인스턴스 생성 및 설정</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">2.</span>
                  <div>
                    <span className="font-semibold">setup_handlers()</span>
                    <p className="text-gray-600">명령어 핸들러 등록</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">3.</span>
                  <div>
                    <span className="font-semibold">start_background_worker()</span>
                    <p className="text-gray-600">백그라운드 분석 워커 시작</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">4.</span>
                  <div>
                    <span className="font-semibold">application.run()</span>
                    <p className="text-gray-600">봇 실행 (polling 방식)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-purple-700">주요 기능:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>/evaluate - 보유 종목 평가</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>/report - 상세 분석 보고서</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>/history - 분석 히스토리</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>답장(Reply) - 추가 질문</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 3: StockAnalysisOrchestrator 클래스
    {
      title: "2. StockAnalysisOrchestrator 클래스",
      icon: <Code className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">주요 메소드 구조</h3>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm space-y-2">
                <div className="text-yellow-400">class StockAnalysisOrchestrator:</div>
                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">├──</span>
                    <span className="text-green-400">run_full_pipeline()</span>
                    <span className="text-gray-500"># 전체 파이프라인 총괄</span>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-400">
                    <div>│   ├── run_trigger_batch()</div>
                    <div>│   ├── send_trigger_alert()</div>
                    <div>│   ├── generate_reports()</div>
                    <div>│   ├── convert_to_pdf()</div>
                    <div>│   ├── generate_telegram_messages()</div>
                    <div>│   ├── send_telegram_messages()</div>
                    <div>│   └── [트래킹 시스템 배치]</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">├──</span>
                    <span className="text-green-400">run_trigger_batch()</span>
                    <span className="text-gray-500"># 급등주 포착</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">├──</span>
                    <span className="text-green-400">send_trigger_alert()</span>
                    <span className="text-gray-500"># 급등주 텔레그램 알림</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">├──</span>
                    <span className="text-green-400">generate_reports()</span>
                    <span className="text-gray-500"># AI 분석 보고서 생성</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">├──</span>
                    <span className="text-green-400">convert_to_pdf()</span>
                    <span className="text-gray-500"># PDF 변환</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">├──</span>
                    <span className="text-green-400">generate_telegram_messages()</span>
                    <span className="text-gray-500"># 텔레그램 요약 메시지</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">└──</span>
                    <span className="text-green-400">send_telegram_messages()</span>
                    <span className="text-gray-500"># 텔레그램 전송</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 4: Phase 1-2
    {
      title: "3. 실행 흐름 - Phase 1~2",
      icon: <GitBranch className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4">Phase 1: 트리거 배치 실행</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-green-700 mb-2">메소드: run_trigger_batch(mode="morning")</div>
                  <div className="text-sm text-gray-600 mb-3">
                    호출 파일: <span className="font-mono bg-gray-100 px-2 py-1 rounded">trigger_batch.py</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    실행 방식: <span className="font-mono bg-gray-100 px-2 py-1 rounded">asyncio.create_subprocess_exec</span>
                  </div>
                </div>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-2">
                  <div className="text-yellow-400"># trigger_batch.py의 run_batch() 함수 실행</div>
                  <div className="text-blue-400">1. pykrx API로 당일/전일 시장 데이터 수집</div>
                  <div className="text-blue-400">2. 오전 트리거 3종 실행:</div>
                  <div className="ml-4 space-y-1">
                    <div className="text-green-400">- trigger_morning_volume_surge()</div>
                    <div className="text-gray-500 ml-6"># 거래량 급증</div>
                    <div className="text-green-400">- trigger_morning_gap_up_momentum()</div>
                    <div className="text-gray-500 ml-6"># 갭 상승 모멘텀</div>
                    <div className="text-green-400">- trigger_morning_value_to_cap_ratio()</div>
                    <div className="text-gray-500 ml-6"># 시총 대비 자금 유입</div>
                  </div>
                  <div className="text-blue-400">3. select_final_tickers() - 최종 3개 종목 선별</div>
                  <div className="text-blue-400">4. JSON 파일 저장</div>
                  <div className="text-purple-400">   trigger_results_morning_YYYYMMDD.json</div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-semibold text-blue-700 text-sm">출력:</div>
                  <div className="text-sm text-gray-600">선정된 종목 리스트 (code, name)</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold mb-4">Phase 2: 급등주 즉시 알림</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-yellow-700 mb-2">메소드: send_trigger_alert(mode, results_file)</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <div>JSON 파일에서 트리거 결과 읽기</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <div className="font-semibold">텔레그램 메시지 포맷팅:</div>
                      <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                        <li>• 트리거 타입별 이모지 설정</li>
                        <li>• 종목별 현재가, 등락률 표시</li>
                        <li>• 특수 지표 (거래량 증가율, 갭 상승률 등)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <div>호출 모듈: <span className="font-mono bg-gray-100 px-2 py-1 rounded">telegram_bot_agent.TelegramBotAgent</span></div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                    <div className="font-semibold text-yellow-700">텔레그램 채널에 급등주 목록 즉시 전송 ✅</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 5: Phase 3 - AI 분석
    {
      title: "4. 실행 흐름 - Phase 3 (AI 분석) ⭐",
      icon: <Zap className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4">Phase 3: AI 분석 보고서 생성 (핵심)</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-purple-700 mb-2">메소드: generate_reports(tickers, mode)</div>
                  <div className="text-sm text-gray-600">직렬 처리로 종목 하나씩 순차 분석</div>
                </div>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-2">
                  <div className="text-yellow-400"># 보고서 생성 루프</div>
                  <div className="text-blue-400">for ticker_info in tickers:</div>
                  <div className="ml-4 space-y-1">
                    <div className="text-green-400">report = await analyze_stock(</div>
                    <div className="ml-4 text-gray-400">company_code=ticker,</div>
                    <div className="ml-4 text-gray-400">company_name=company_name,</div>
                    <div className="ml-4 text-gray-400">reference_date=reference_date</div>
                    <div className="text-green-400">)</div>
                    <div className="text-purple-400 mt-2"># 마크다운 파일로 저장</div>
                    <div className="text-gray-400">output = f"{'{ticker}_{name}_{date}_{mode}_gpt4.1.md'}"</div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-700 mb-3">analyze_stock() 내부 흐름 (cores/analysis.py)</h4>

                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">1. MCP App 초기화</div>
                      <div className="text-gray-600 text-xs mt-1">async with app.run() as parallel_app:</div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">2. 에이전트 디렉토리 가져오기</div>
                      <div className="text-gray-600 text-xs mt-1">get_agent_directory() - 6개 분석 + 1개 전략 에이전트</div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">3. 기본 분석 섹션 순차 실행 (6개)</div>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>price_volume_analysis</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>investor_trading_analysis</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>company_status</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>company_overview</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span>news_analysis</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>market_index_analysis</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">4. 각 섹션 처리</div>
                      <div className="bg-gray-900 text-xs p-2 rounded mt-2 font-mono">
                        <div className="text-green-400">generate_report(agent, section, ...)</div>
                        <div className="text-gray-400 ml-4">├─ MCP 서버 tool 호출</div>
                        <div className="text-gray-400 ml-4">│  (kospi-kosdaq, firecrawl, perplexity)</div>
                        <div className="text-gray-400 ml-4">├─ GPT-4.1 API 호출</div>
                        <div className="text-gray-400 ml-4">└─ 마크다운 보고서 반환</div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">5. 투자 전략 생성</div>
                      <div className="text-gray-600 text-xs mt-1">generate_investment_strategy() - 모든 분석 통합</div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">6. 요약 생성</div>
                      <div className="text-gray-600 text-xs mt-1">generate_summary() - 핵심 투자 포인트</div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">7. 차트 생성 (4종)</div>
                      <div className="grid grid-cols-2 gap-1 mt-2 text-xs">
                        <div>📊 가격 차트</div>
                        <div>📈 거래량 차트</div>
                        <div>💰 시가총액 차트</div>
                        <div>📉 기본 지표 차트</div>
                      </div>
                      <div className="text-gray-600 text-xs mt-2">matplotlib → Base64 HTML 임베딩</div>
                    </div>

                    <div className="bg-white p-3 rounded border-l-2 border-indigo-400">
                      <div className="font-semibold text-indigo-600">8. 최종 보고서 조합</div>
                      <div className="text-gray-600 text-xs mt-1">면책조항 + 요약 + 6개 섹션 + 투자전략 + 차트</div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-2">핵심 특징</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>MCP 서버 활용</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>비동기 처리 (async/await)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>시장 분석 캐싱</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600">✓</span>
                      <span>직렬 처리 (Rate limit 대응)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 6: Phase 4-6
    {
      title: "5. 실행 흐름 - Phase 4~6",
      icon: <FileText className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-4">Phase 4: PDF 변환</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-orange-700 mb-2">메소드: convert_to_pdf(report_paths)</div>
                  <div className="text-sm text-gray-600">호출 모듈: <span className="font-mono bg-gray-100 px-2 py-1 rounded">pdf_converter.markdown_to_pdf()</span></div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="font-semibold text-orange-700">엔진</div>
                    <div className="text-gray-600">pdfkit (wkhtmltopdf)</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="font-semibold text-orange-700">옵션</div>
                    <div className="text-gray-600">테마 적용, 워터마크 비활성화</div>
                  </div>
                </div>
                <div className="bg-gray-900 text-purple-400 p-3 rounded font-mono text-xs">
                  출력: pdf_reports/{'{ticker}_{name}_{date}_{mode}_gpt4.1.pdf'}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl border-l-4 border-teal-500">
              <h3 className="text-xl font-bold mb-4">Phase 5: 텔레그램 요약 메시지 생성</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-teal-700 mb-2">메소드: generate_telegram_messages(pdf_paths)</div>
                  <div className="text-sm text-gray-600">호출 모듈: <span className="font-mono bg-gray-100 px-2 py-1 rounded">telegram_summary_agent.TelegramSummaryGenerator</span></div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">프로세스:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">1.</span>
                      <span>PDF 보고서 읽기</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">2.</span>
                      <div>
                        <div className="font-semibold">요약 전문가 에이전트 (GPT-4.1) 호출</div>
                        <div className="text-gray-600 ml-4">→ 400자 내외 핵심 요약 생성</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">3.</span>
                      <div>
                        <div className="font-semibold">품질 검수자 에이전트 (GPT-4.1) 호출</div>
                        <div className="text-gray-600 ml-4">→ EXCELLENT 등급까지 반복 개선</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">4.</span>
                      <span>텔레그램 포맷팅 적용</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 text-purple-400 p-3 rounded font-mono text-xs">
                  출력: telegram_messages/{'{ticker}_{name}_telegram.txt'}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4">Phase 6: 텔레그램 전송</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-blue-700 mb-2">메소드: send_telegram_messages(message_paths, pdf_paths)</div>
                </div>

                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 mb-2">6-1. 메시지 전송</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                      <div>bot_agent = TelegramBotAgent()</div>
                      <div>await bot_agent.process_messages_directory(</div>
                      <div className="ml-4">telegram_msgs_dir, chat_id, sent_dir</div>
                      <div>)</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 mb-2">6-2. PDF 파일 전송</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                      <div>for pdf_path in pdf_paths:</div>
                      <div className="ml-4">await bot_agent.send_document(</div>
                      <div className="ml-8">chat_id, pdf_path</div>
                      <div className="ml-4">)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 7: Phase 7 - 매매 시뮬레이션
    {
      title: "6. 실행 흐름 - Phase 7 (매매 시뮬레이션) ⭐",
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-4">Phase 7: 매매 시뮬레이션 및 자동매매</h3>

              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="font-semibold text-red-700 mb-2">위치: run_full_pipeline() 메소드 내 6번 트래킹 시스템 배치</div>
                <div className="text-sm text-gray-600">Phase 6 이후 별도로 실행됨</div>
              </div>

              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-2 mb-4">
                <div className="text-yellow-400"># 6. 트래킹 시스템 배치</div>
                <div className="text-blue-400">from stock_tracking_enhanced_agent import EnhancedStockTrackingAgent</div>
                <div className="text-blue-400">from stock_tracking_agent import app as tracking_app</div>
                <div className="mt-2"></div>
                <div className="text-green-400">async with tracking_app.run():</div>
                <div className="ml-4 text-gray-300">tracking_agent = StockTrackingAgent(telegram_token)</div>
                <div className="ml-4 text-gray-300">await tracking_agent.run(pdf_paths, chat_id)</div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-700 mb-3">매매 에이전트 흐름:</h4>

                <div className="space-y-4">
                  <div className="bg-white p-3 rounded border-l-2 border-red-400">
                    <div className="font-semibold text-red-600 mb-2">1. PDF 보고서 파싱</div>
                    <div className="text-xs text-gray-600">생성된 분석 보고서에서 종목 정보 추출</div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-red-400">
                    <div className="font-semibold text-red-600 mb-2">2. 매수 전문가 (GPT-5) 호출</div>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">밸류에이션 + 모멘텀 평가</span>
                          <div className="text-xs text-gray-600">1-10점 스코어링</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">10개 슬롯 포트폴리오 관리</span>
                          <div className="text-xs text-gray-600">산업군 분산투자</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">목표가/손절가 설정</span>
                          <div className="text-xs text-gray-600">동적 가격 설정</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">매수 시나리오 작성 → SQLite DB 저장</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm bg-yellow-100 p-2 rounded">
                        <span className="text-red-600">🔥</span>
                        <div>
                          <span className="font-semibold text-red-600">한국투자증권 API 자동매매 실행</span>
                          <div className="text-xs text-gray-600">실제 주문 체결</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-red-400">
                    <div className="font-semibold text-red-600 mb-2">3. 매도 전문가 (GPT-5) 호출</div>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">보유 종목 모니터링</span>
                          <div className="text-xs text-gray-600">실시간 체크</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">손절/익절 조건 체크</span>
                          <div className="text-xs text-gray-600">시나리오 기반 판단</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">•</span>
                        <div>
                          <span className="font-semibold">매도 결정 → DB 업데이트</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm bg-yellow-100 p-2 rounded">
                        <span className="text-red-600">🔥</span>
                        <div>
                          <span className="font-semibold text-red-600">한국투자증권 API 자동매매 실행</span>
                          <div className="text-xs text-gray-600">실제 매도 체결</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-red-400">
                    <div className="font-semibold text-red-600 mb-2">4. 텔레그램 리포트 전송</div>
                    <div className="text-xs text-gray-600">매매 결과 및 포트폴리오 현황 알림</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-yellow-700 mb-2">자동매매 모듈</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-600">📁</span>
                    <span className="font-mono">trading/domestic_stock_trading.py</span>
                    <span className="text-gray-600">- 실제 매매 실행</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-600">📁</span>
                    <span className="font-mono">trading/kis_auth.py</span>
                    <span className="text-gray-600">- API 인증</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-600">📁</span>
                    <span className="font-mono">trading/portfolio_telegram_reporter.py</span>
                    <span className="text-gray-600">- 포트폴리오 리포트</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 7: Phase 7 추가 상세
    {
      title: "6-1. 자동매매 시스템 상세",
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-xl border-l-4 border-pink-500">
              <h3 className="text-xl font-bold mb-4">한국투자증권 API 자동매매</h3>

              <div className="bg-white p-4 rounded-lg mb-4">
                <h4 className="font-bold text-pink-700 mb-3">핵심 파일 구조</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm space-y-1">
                  <div className="text-yellow-400">trading/</div>
                  <div className="ml-4 space-y-1">
                    <div className="text-green-400">├── domestic_stock_trading.py</div>
                    <div className="ml-8 text-gray-400"># 실제 매매 실행 모듈</div>
                    <div className="text-green-400">├── kis_auth.py</div>
                    <div className="ml-8 text-gray-400"># API 인증 및 토큰 관리</div>
                    <div className="text-green-400">├── portfolio_telegram_reporter.py</div>
                    <div className="ml-8 text-gray-400"># 포트폴리오 리포트 생성</div>
                    <div className="text-green-400">└── config/</div>
                    <div className="ml-8 text-green-400">└── kis_devlp.yaml</div>
                    <div className="ml-12 text-gray-400"># API 설정 파일</div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-bold text-pink-700 mb-3">domestic_stock_trading.py - 주요 클래스 및 메소드</h4>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold text-pink-600 mb-2">KISTrading 클래스</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400">class KISTrading:</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-blue-400">def __init__(self, config_path):</div>
                        <div className="ml-8 text-gray-400"># kis_devlp.yaml 로드</div>
                        <div className="ml-8 text-gray-400"># API 인증 정보 초기화</div>
                        <div className="mt-2"></div>
                        <div className="text-blue-400">def buy_order(self, stock_code, qty, price):</div>
                        <div className="ml-8 text-gray-400"># 매수 주문 실행</div>
                        <div className="ml-8 text-gray-400"># POST /uapi/domestic-stock/v1/trading/order-cash</div>
                        <div className="mt-2"></div>
                        <div className="text-blue-400">def sell_order(self, stock_code, qty, price):</div>
                        <div className="ml-8 text-gray-400"># 매도 주문 실행</div>
                        <div className="ml-8 text-gray-400"># POST /uapi/domestic-stock/v1/trading/order-cash</div>
                        <div className="mt-2"></div>
                        <div className="text-blue-400">def get_balance(self):</div>
                        <div className="ml-8 text-gray-400"># 계좌 잔고 조회</div>
                        <div className="ml-8 text-gray-400"># GET /uapi/domestic-stock/v1/trading/inquire-balance</div>
                        <div className="mt-2"></div>
                        <div className="text-blue-400">def get_current_price(self, stock_code):</div>
                        <div className="ml-8 text-gray-400"># 현재가 조회</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <div className="font-semibold text-pink-600 mb-2">kis_auth.py - 인증 관리</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                      <div className="text-yellow-400">class KISAuth:</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-blue-400">def get_access_token(self):</div>
                        <div className="ml-8 text-gray-400"># OAuth 토큰 발급</div>
                        <div className="ml-8 text-gray-400"># POST /oauth2/tokenP</div>
                        <div className="ml-8 text-purple-400"># 토큰 유효시간: 24시간</div>
                        <div className="mt-2"></div>
                        <div className="text-blue-400">def refresh_token(self):</div>
                        <div className="ml-8 text-gray-400"># 토큰 갱신 (만료 전)</div>
                        <div className="mt-2"></div>
                        <div className="text-blue-400">def get_hashkey(self, data):</div>
                        <div className="ml-8 text-gray-400"># 거래 시 필요한 해시키 생성</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-yellow-800 mb-2">매매 실행 흐름</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">매수 전문가 결정</span>
                      <div className="text-gray-600">→ GPT-5가 매수 점수 8점 이상 판단</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">KISTrading 초기화</span>
                      <div className="text-gray-600">→ config/kis_devlp.yaml 로드</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">인증 토큰 획득</span>
                      <div className="text-gray-600">→ KISAuth.get_access_token()</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">4.</span>
                    <div>
                      <span className="font-semibold">계좌 잔고 확인</span>
                      <div className="text-gray-600">→ get_balance() - 매수 가능 금액 체크</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">5.</span>
                    <div>
                      <span className="font-semibold">현재가 조회</span>
                      <div className="text-gray-600">→ get_current_price(stock_code)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">6.</span>
                    <div>
                      <span className="font-semibold">매수 주문 실행</span>
                      <div className="text-gray-600">→ buy_order(code, qty, price)</div>
                      <div className="text-xs text-gray-500 ml-4 mt-1">
                        • 주문 유형: 지정가/시장가<br/>
                        • 수량 계산: (매수금액 / 현재가)<br/>
                        • 주문 접수 → 체결 확인
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">7.</span>
                    <div>
                      <span className="font-semibold">매매 결과 DB 저장</span>
                      <div className="text-gray-600">→ SQLite 포트폴리오 업데이트</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">8.</span>
                    <div>
                      <span className="font-semibold">텔레그램 알림</span>
                      <div className="text-gray-600">→ portfolio_telegram_reporter.py</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 8: Config 파일
    {
      title: "6-2. 설정 파일 (kis_devlp.yaml)",
      icon: <Database className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4">한국투자증권 API 설정</h3>

              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs mb-4 overflow-x-auto">
                <div className="space-y-1">
                  <div className="text-yellow-400"># 종목 매수 단위 금액</div>
                  <div>default_unit_amount: 10000</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># 자동매매 작동 여부</div>
                  <div>auto_trading: true</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># 기본 매매 환경 (demo: 모의투자, real: 실제투자)</div>
                  <div>default_mode: demo</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># 실전투자 API 키</div>
                  <div>my_app: &quot;실전투자용_앱키를_여기에_입력&quot;</div>
                  <div>my_sec: &quot;실전투자용_시크릿을_여기에_입력&quot;</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># 모의투자 API 키</div>
                  <div>paper_app: &quot;모의투자용_앱키를_여기에_입력&quot;</div>
                  <div>paper_sec: &quot;모의투자용_시크릿을_여기에_입력&quot;</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># HTS ID</div>
                  <div>my_htsid: &quot;HTS_아이디를_여기에_입력&quot;</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># 계좌번호 (앞 8자리)</div>
                  <div>my_acct_stock: &quot;12345678&quot;</div>
                  <div>my_paper_stock: &quot;87654321&quot;</div>
                  <div className="mt-2"></div>
                  <div className="text-yellow-400"># 계좌번호 (뒤 2자리)</div>
                  <div>my_prod: &quot;01&quot;  # 종합계좌</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-700 mb-3">주요 옵션 설명</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-indigo-600">default_unit_amount</div>
                      <div className="text-gray-600">종목당 매수 금액 (원)</div>
                    </div>
                    <div>
                      <div className="font-semibold text-indigo-600">auto_trading</div>
                      <div className="text-gray-600">자동매매 활성화 여부</div>
                    </div>
                    <div>
                      <div className="font-semibold text-indigo-600">default_mode</div>
                      <div className="text-gray-600">
                        demo: 모의투자<br/>
                        real: 실전투자
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-indigo-700 mb-3">계좌 설정</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-indigo-600">my_prod 옵션</div>
                      <div className="text-gray-600 text-xs">
                        01: 종합계좌<br/>
                        03: 국내선물옵션<br/>
                        08: 해외선물옵션<br/>
                        22: 개인연금<br/>
                        29: 퇴직연금
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-red-700 mb-3">⚠️ 설정 방법</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">1.</span>
                    <span>https://openapi.koreainvestment.com 방문</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">2.</span>
                    <span>회원가입 및 API 신청</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">3.</span>
                    <span>모의투자용/실전투자용 앱키 발급</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">4.</span>
                    <span>kis_devlp.yaml.example을 kis_devlp.yaml로 복사</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">5.</span>
                    <span>실제 값으로 수정</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 9: 텔레그램 봇 - /evaluate
    {
      title: "7. 텔레그램 봇 - /evaluate 명령어",
      icon: <Bot className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4">/evaluate: 보유 종목 평가</h3>

              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="font-semibold text-purple-700 mb-2">목적</div>
                <div className="text-sm text-gray-600">보유 종목에 대한 맞춤형 평가 및 투자 조언 제공</div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-purple-600">AI 모델:</span> Claude Sonnet 4.5
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="font-bold text-purple-700">대화 흐름:</h4>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1">/evaluate</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1">종목 코드/이름 입력 요청</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1">삼성전자 (또는 005930)</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1">평균 매수가 입력 요청</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1">68500</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1">보유 기간 입력 요청 (개월)</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1">6</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1">피드백 스타일 입력 요청</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1">친구처럼 솔직하게</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1">매매 배경 입력 요청 (선택)</div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1">없음</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-purple-700 mb-3">AI 분석 프로세스:</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-1">
                  <div className="text-yellow-400"># generate_evaluation_response()</div>
                  <div className="text-blue-400">1. MCP App 초기화</div>
                  <div className="text-blue-400">2. Claude Sonnet 4.5 에이전트 생성</div>
                  <div className="text-blue-400">3. 데이터 수집 (순차):</div>
                  <div className="ml-4 text-green-400">├─ get_current_time: 현재 날짜</div>
                  <div className="ml-4 text-green-400">├─ get_stock_ohlcv: 3개월 주가 데이터</div>
                  <div className="ml-8 text-gray-400">└─ 수익률 = (현재가-매수가)/매수가*100</div>
                  <div className="ml-4 text-green-400">├─ get_stock_trading_volume: 투자자별 거래 동향</div>
                  <div className="ml-4 text-green-400">└─ perplexity_ask: 최신 뉴스, 실적, 업종 동향</div>
                  <div className="text-blue-400">4. 스타일 적응형 응답 생성:</div>
                  <div className="ml-4 text-gray-400">├─ 격식성/직접성/감정표현 분석</div>
                  <div className="ml-4 text-gray-400">├─ 투자 상황별 맞춤 조언</div>
                  <div className="ml-4 text-gray-400">│  (수익/손실/단기/장기)</div>
                  <div className="ml-4 text-gray-400">└─ 이모티콘 활용 텔레그램 스타일</div>
                  <div className="text-blue-400">5. 응답 전송 + 대화 컨텍스트 저장</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mt-4 border-2 border-purple-300">
                <h4 className="font-bold text-purple-700 mb-2">답장(Reply) 기반 추가 질문</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1 border">
                      평가 메시지 전송<br/>
                      <span className="text-xs text-purple-600">💡 추가 질문은 이 메시지에 답장(Reply)하세요</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">사용자</div>
                    <div className="bg-white p-2 rounded flex-1 border-l-4 border-blue-300">
                      (메시지에 답장) "목표가는 얼마로 잡아야 할까?"
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">봇</div>
                    <div className="bg-white p-2 rounded flex-1">
                      <div className="text-xs text-gray-600 mb-1">generate_follow_up_response() 호출</div>
                      <div>이전 대화 컨텍스트 유지한 답변</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-purple-700 mb-2">핵심 파일</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>• telegram_ai_bot.py - 봇 메인 로직</div>
                  <div>• report_generator.py - AI 응답 생성</div>
                  <div>• ConversationContext - 대화 컨텍스트 (24시간 유지)</div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 9: 텔레그램 봇 - /report
    {
      title: "8. 텔레그램 봇 - /report 명령어",
      icon: <FileText className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4">/report: 상세 분석 보고서 생성</h3>

              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="font-semibold text-green-700 mb-2">목적</div>
                <div className="text-sm text-gray-600">전문가 수준의 상세 분석 보고서 생성 (HTML 형식)</div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-green-600">AI 모델:</span> GPT-4.1 (6개 분석 에이전트)
                </div>
              </div>

              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs space-y-1 mb-4">
                <div className="text-purple-500">[사용자] /report</div>
                <div className="text-blue-400">[봇] 종목 코드/이름 입력 요청</div>
                <div className="text-purple-500">[사용자] NAVER (또는 035420)</div>
                <div className="text-yellow-400">├─ get_cached_report() 캐시 확인</div>
                <div className="text-gray-400">│   ├─ 24시간 이내 보고서 있음? → 즉시 전송</div>
                <div className="text-gray-400">│   └─ 없음? → 분석 큐에 등록</div>
                <div className="text-green-400">└─ AnalysisRequest 생성</div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-700 mb-3">백그라운드 워커 프로세스:</h4>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <div className="font-semibold text-green-600 mb-2">1. 큐에서 요청 가져오기</div>
                    <div className="text-xs text-gray-600 font-mono">analysis_queue.get()</div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <div className="font-semibold text-green-600 mb-2">2. generate_report_response_sync() 호출</div>
                    <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mt-2">
                      <div># 서브프로세스로 analyze_stock() 실행</div>
                      <div>subprocess.run([</div>
                      <div className="ml-4">sys.executable, "-c",</div>
                      <div className="ml-4">"from cores.analysis import analyze_stock"</div>
                      <div className="ml-4">"await analyze_stock(...)"</div>
                      <div>])</div>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      ※ 서브프로세스 격리로 이벤트 루프 충돌 방지
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <div className="font-semibold text-green-600 mb-2">3. analyze_stock() 실행</div>
                    <div className="text-xs text-gray-600">
                      ├─ 6개 분석 에이전트 순차 실행<br/>
                      ├─ 투자 전략 생성<br/>
                      ├─ 요약 생성<br/>
                      ├─ 4종 차트 생성<br/>
                      └─ 마크다운 보고서 반환
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <div className="font-semibold text-green-600 mb-2">4. 마크다운 → HTML 변환</div>
                    <div className="text-xs text-gray-600 font-mono">
                      convert_to_html(markdown_content)
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <div className="font-semibold text-green-600 mb-2">5. 결과 큐에 완료 알림</div>
                    <div className="text-xs text-gray-600 font-mono">
                      bot_instance.result_queue.put(request.id)
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <div className="font-semibold text-green-600 mb-2">6. HTML 파일 전송</div>
                    <div className="text-xs text-gray-600">
                      send_report_result() - 텔레그램으로 HTML 전송
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mt-4">
                <h4 className="font-bold text-green-700 mb-3">핵심 파일:</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>• telegram_ai_bot.py - /report 핸들러</div>
                  <div>• analysis_manager.py - 백그라운드 워커, 큐 관리</div>
                  <div>• report_generator.py - 보고서 생성 및 변환</div>
                  <div>• cores/analysis.py - AI 분석 엔진 (GPT-4.1)</div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-yellow-700 mb-2">특징</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>큐 시스템 순차 처리</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>24시간 캐싱</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>서브프로세스 격리</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>HTML 형식 제공</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 10: 봇 vs 오케스트레이터
    {
      title: "9. 봇 vs 오케스트레이터 비교",
      icon: <GitBranch className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">시스템 비교표</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="p-3 text-left border">구분</th>
                    <th className="p-3 text-left border">telegram_ai_bot.py</th>
                    <th className="p-3 text-left border">stock_analysis_orchestrator.py</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border font-semibold">실행 방식</td>
                    <td className="p-3 border">24시간 상시 운영</td>
                    <td className="p-3 border">Crontab 스케줄 (오전/오후)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">주체</td>
                    <td className="p-3 border">사용자 요청 기반</td>
                    <td className="p-3 border">자동화된 파이프라인</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border font-semibold">AI 모델</td>
                    <td className="p-3 border">Claude Sonnet 4.5</td>
                    <td className="p-3 border">GPT-4.1 (분석), GPT-5 (매매)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">목적</td>
                    <td className="p-3 border">대화형 종목 평가/상담</td>
                    <td className="p-3 border">급등주 포착 → 분석 → 매매</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border font-semibold">보고서 생성</td>
                    <td className="p-3 border">요청 시 개별 생성 (큐)</td>
                    <td className="p-3 border">선정 종목 일괄 생성 (직렬)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">보고서 형식</td>
                    <td className="p-3 border">HTML</td>
                    <td className="p-3 border">PDF</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border font-semibold">대화 기능</td>
                    <td className="p-3 border bg-green-100">✅ 컨텍스트 유지</td>
                    <td className="p-3 border bg-red-100">❌ 없음</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border font-semibold">매매 기능</td>
                    <td className="p-3 border bg-red-100">❌ 없음</td>
                    <td className="p-3 border bg-green-100">✅ 시뮬레이션 + 자동매매</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                  <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    텔레그램 봇 특징
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>사용자 맞춤형 스타일 응답</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>답장 기반 연속 대화</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>24시간 컨텍스트 유지</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>보고서 24시간 캐싱</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                  <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    오케스트레이터 특징
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>자동 급등주 포착</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>전문가급 종합 분석</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>AI 기반 매매 시뮬레이션</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>실제 자동매매 실행</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 11: 파일 구조
    {
      title: "10. 주요 파일 구조",
      icon: <Database className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">실행 흐름별 파일 매핑</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-cyan-700 mb-3">1. 오케스트레이션</h4>
                  <div className="font-mono text-sm">└── stock_analysis_orchestrator.py</div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3">2. 급등주 포착</h4>
                  <div className="font-mono text-sm">└── trigger_batch.py</div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3">3. AI 분석 보고서</h4>
                  <div className="font-mono text-sm space-y-1">
                    <div>├── cores/main.py</div>
                    <div>├── cores/analysis.py</div>
                    <div>├── cores/report_generation.py</div>
                    <div>├── cores/agents/*.py (12개 에이전트)</div>
                    <div>├── cores/stock_chart.py (차트 생성)</div>
                    <div>└── cores/utils.py</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-3">4. PDF 변환</h4>
                  <div className="font-mono text-sm">└── pdf_converter.py</div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-700 mb-3">5. 텔레그램 처리 (오케스트레이터용)</h4>
                  <div className="font-mono text-sm space-y-1">
                    <div>├── telegram_summary_agent.py (요약 생성)</div>
                    <div>└── telegram_bot_agent.py (전송)</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-700 mb-3">6. 텔레그램 봇 (사용자 대화) ⭐</h4>
                  <div className="font-mono text-sm space-y-1">
                    <div>├── telegram_ai_bot.py (메인 봇 로직)</div>
                    <div>├── report_generator.py (AI 응답 생성)</div>
                    <div>│   ├── generate_evaluation_response()</div>
                    <div>│   ├── generate_follow_up_response()</div>
                    <div>│   ├── generate_report_response_sync()</div>
                    <div>│   └── convert_to_html()</div>
                    <div>└── analysis_manager.py (백그라운드 워커, 큐)</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3">7. 매매 시뮬레이션 및 자동매매</h4>
                  <div className="font-mono text-sm space-y-1">
                    <div>├── stock_tracking_agent.py</div>
                    <div>├── stock_tracking_enhanced_agent.py</div>
                    <div>└── trading/ (자동매매 모듈)</div>
                    <div>    ├── domestic_stock_trading.py (실제 매매)</div>
                    <div>    ├── kis_auth.py (API 인증)</div>
                    <div>    ├── portfolio_telegram_reporter.py</div>
                    <div>    └── config/kis_devlp.yaml (API 설정)</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-3">8. MCP 서버</h4>
                  <div className="font-mono text-sm space-y-1">
                    <div>├── kospi-kosdaq (외부)</div>
                    <div>├── firecrawl (외부)</div>
                    <div>├── perplexity-ask/ (프로젝트 내)</div>
                    <div>└── sqlite/ (프로젝트 내)</div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg mt-6">
                <h4 className="font-bold text-cyan-700 mb-3">데이터 저장 위치</h4>
                <div className="font-mono text-sm space-y-1">
                  <div>reports/ - 마크다운 보고서</div>
                  <div>pdf_reports/ - PDF 보고서</div>
                  <div>html_reports/ - HTML 보고서 (봇용)</div>
                  <div>telegram_messages/ - 텔레그램 메시지</div>
                  <div>  └── sent/ - 전송 완료 메시지</div>
                  <div>charts/ - 차트 이미지</div>
                  <div>trigger_results_*.json - 급등주 포착 결과</div>
                  <div>stock_tracking_db.sqlite - 매매 시뮬레이션 DB</div>
                  <div>stock_map.json - 종목 코드-이름 매핑 (봇용)</div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 12: 핵심 특징
    {
      title: "11. 핵심 설계 특징",
      icon: <Zap className="w-6 h-6" />,
      content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">설계 철학 & 핵심 포인트</h3>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-3 text-lg">1. 완전 비동기 (async/await)</h4>
                  <p className="text-sm text-gray-700 mb-3">전체 파이프라인이 asyncio 기반으로 구현</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                    async def run_full_pipeline(mode):<br/>
                    &nbsp;&nbsp;tickers = await run_trigger_batch(mode)<br/>
                    &nbsp;&nbsp;reports = await generate_reports(tickers)<br/>
                    &nbsp;&nbsp;...
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-700 mb-3 text-lg">2. MCP 중심 아키텍처</h4>
                  <p className="text-sm text-gray-700 mb-3">Model Context Protocol로 도구 통합</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded">• kospi-kosdaq</div>
                    <div className="bg-blue-50 p-2 rounded">• firecrawl</div>
                    <div className="bg-blue-50 p-2 rounded">• perplexity</div>
                    <div className="bg-blue-50 p-2 rounded">• sqlite</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-3 text-lg">3. 멀티 에이전트 시스템</h4>
                  <p className="text-sm text-gray-700 mb-3">12개 전문 AI 에이전트 협업</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-purple-50 p-2 rounded text-center">기술적 분석가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">거래동향 분석가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">재무 분석가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">산업 분석가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">정보 분석가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">시장 분석가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">투자 전략가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">요약 전문가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">품질 검수자</div>
                    <div className="bg-purple-50 p-2 rounded text-center">매수 전문가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">매도 전문가</div>
                    <div className="bg-purple-50 p-2 rounded text-center">대화 관리자</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-3 text-lg">4. 직렬 처리 (Rate Limit 대응)</h4>
                  <p className="text-sm text-gray-700">종목별 순차 분석으로 API Rate Limit 회피</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-3 text-lg">5. 이중 구조 시스템</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <div className="font-semibold mb-1">오케스트레이터</div>
                      <div className="text-gray-600 text-xs">자동화된 분석 파이프라인</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <div className="font-semibold mb-1">텔레그램 봇</div>
                      <div className="text-gray-600 text-xs">대화형 사용자 서비스</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-5 rounded-xl mt-6">
                <h4 className="font-bold text-yellow-800 mb-3">성능 최적화 전략</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>시장 분석 캐싱 (글로벌 변수)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>보고서 24시간 캐싱</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>차트 JPG 압축</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>타임아웃 관리 (120분)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>큐 시스템 (Rate limit)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>서브프로세스 격리</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    },

    // 슬라이드 13: 마무리
    {
      title: "감사합니다",
      type: "ending",
      content: (
          <div className="text-center space-y-8">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Q & A
            </div>
            <div className="text-2xl text-gray-600">
              프리즘 인사이트 코드 구조 분석
            </div>
            <div className="flex justify-center gap-12 mt-12">
              <div className="text-center">
                <Terminal className="w-16 h-16 text-blue-500 mx-auto mb-3" />
                <div className="font-semibold">오케스트레이터</div>
                <div className="text-sm text-gray-600">자동화 파이프라인</div>
              </div>
              <div className="text-center">
                <Bot className="w-16 h-16 text-purple-500 mx-auto mb-3" />
                <div className="font-semibold">텔레그램 봇</div>
                <div className="text-sm text-gray-600">대화형 서비스</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-red-500 mx-auto mb-3" />
                <div className="font-semibold">자동매매</div>
                <div className="text-sm text-gray-600">AI 기반 트레이딩</div>
              </div>
            </div>
            <div className="text-gray-500 text-lg mt-12">
              💡 추가 질문이나 커스터마이징이 필요하시면 언제든 문의주세요
            </div>
          </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
      <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        {/* 헤더 */}
        <div className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {currentSlideData.icon && (
                <div className="text-blue-600">{currentSlideData.icon}</div>
            )}
            <h1 className="text-2xl font-bold text-gray-800">{currentSlideData.title}</h1>
          </div>
          <div className="text-sm text-gray-500">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 p-8 overflow-hidden">
          <div className="h-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto p-8">
              {currentSlideData.content}
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
          <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentSlide === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
            이전
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                            ? 'bg-blue-600 w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
            ))}
          </div>

          <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentSlide === slides.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
              }`}
          >
            다음
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
  );
};

export default PrismPresentation;