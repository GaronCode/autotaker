// ==UserScript==
// @name         toloka autotaker
// @namespace    http://tampermonkey.net/
// @version      1
// @homepageURL  https://github.com/GaronCode/autotaker
// @supportURL   https://github.com/GaronCode/autotaker/issues
// @updateURL    https://raw.githubusercontent.com/GaronCode/autotaker/main/autotaker.js
// @downloadURL  https://raw.githubusercontent.com/GaronCode/autotaker/main/autotaker.js
// @description  автообновление и автопринятие заданий из списка в толоке
// @author       GaroN
// @match        https://toloka.yandex.ru/tasks
// @icon         data:image/gif;base64,R0lGODlhDQEFAXAAACH5BAEAAP8ALAAAAAANAQUBh0p7AAAAACkxKf///0J7ABAhAEpzAAAIAEJzAEJrABkhAEqEABAxABApADpjAEKEADpSAAgIAAAQAAgZADEAABkIACExAClCAOYIEFoACL2ttUJaAJSljIR7YzqMa4wxGeYxGTqMMWMpGWOtjDq95r3mjDq9a2PmjDpj5mPmOr3mOr2tjDq9MWOtOr2tOpStYxCMaxCMMWOtYxC95r3mYxC9a2PmYxBj5mPmEL3mEL2tYxC9MWOtEL2tEFpSWoxaYxCUpZRanLUIEJylre9a3u9aWpRa3pQQ3u8Q3u9anO9aGZQQnO8QnDFSAGN7nL2t5pyt5jpaMb173r17WmN73mMx3r0x3r17nL17GWMxnL0xnL3etTpaYzoQUjrv5u/mjDrva5TmjDqU5pTmOu/mOu+tjDrvMZStOu+tOr0xGRBjMRBjaxDv5u/mYxDva5TmYxCU5pTmEO/mEO+tYxDvMZStEO+tEDFaADFCAL3e5hAxIXvm5nut5nvmtXuttZzmtZzm5lrm5lqt5lrmtVqttd7e5jo6Su973u97WpR73pQx3u8x3u97nO97GZQxnO8xnDE6KTEQITo65jo6hDo6tRA6UhA65hA6hBA6tToQ5joQhDoQtRAQUhAQ5hAQhBAQtYxaEGMQSr0QSowAACFCAOac5uacte/e5t7WzhlaAGN7MRAQKZQQSu8QSmNza2NzUjq9tTpjtRC9tRBjtYxaMWMQa70Qa4wIIWNarb1a771aa2Na72MQ770Q771arb1aKWMQrb0QrYx7EGMxSr0xSjq9lDpjlBC9lBBjlGNajL1azr1aSmNazmMQzr0Qzr1ajL1aCGMQjL0QjOberYyEhOa95ua9te/37zq1CBC1CAAZAFpzCJR7rTrvtTqUtRDvtZQQa+8Qa2NSEJQxSu8xSjrvlDqUlBDvlIx7MWMxa70xazrmCBDmCOb3vVpSMZQxa+8xawghABmMCAAACBl7ACk6GSkxMSk6Keb3/0JzCAghCEp7CEJ7CAAICP/3/wAAAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKC3eSYAAgMuXMGPKnEmzps2bOHPq3Mmzp8+fMBEkuJMS452WQJMqXcq0qdOnOxEQLfqwCVKoWLNq3cq1KYImVBXe6Uq2rNmzZaeGHdgErdu3cOPuBBuWw1W5ePPqNYuAQ9G2ewMLHvyUrskEhBMrXqwzgcm7jCNLXoxgJDXIkzNr1ouAGsjLm0OLxtv5I+bRqFNvrdwRserXsLM63gg4tu3bSg1f9IG7t++ePjDa/U28OM2+F2sbJ7xgwUznzQFEX35Tt0RX1PUa2P7ywYPoBAjA/yTQ3Pv07DRdVRyLXu52Ay6bTyeAoH4ClggImG9fU21E7PwRtt1QTVxgYBMO5CdegOlNpByDeRmwAQSkNDDBBBJcqAApR8EHYUzWNQTahxFucEEBEkhwwAEBtBiABA0ctSCJAJQGESQ0oiXfS0KRMkEEK87joosSMCBjjgBAEhF7SJK1HwD03dGAikNW+WIDDnhIo38MjdhkV/sZIBUD2rBoZZUSXJCAlnKd9xYC6jlkyJdQ0qeTfjxNZ0ACF0xg5plDHlBAE65BdV544jn3wIzSuemWIQ/Z0ySi9CHwHqPjhQfUnhZIAOiZEajJ1Xb1aXoefDvGZc9DTJKI6KL33f/HZqPgJWWAAxb8+amLB1jgQFbODchdeKfOCheXCVFTqKv2NWFBAw0wQAqhSMnnnFIG3MGArrtGEIGvUFWawAZ44NEEBAnmBxN3eSXgGUOunBYgAQk0YaGKKWqjDQNqtpSqrQ5su2uVvf7a1LX1WvBjBBkWYAGha77HrlxwNsRbjgg4QEo8nvJ6QIoT+FrtUrdOOXCgImOalMYLt7hiwxZs8J5gwTE0J4nbsUwlwSuGLLN0JDtg8sku+6optglAoPCKBHvr85ovqfxoQ5LizKefLAoJ6AR4QI1tydzuWrC8PEloAZDdhuz1Ag/ktSpDVX8o1ZRZi60ABF5vmm0DYQPl+jG4TBnQZ9+BRjBo3m5TTeNXfhJ9wARqGlv23oQHMI/WAfxtMLa4RuC42mS79fZCcUOIACk7D3xABHdLvtN2UlZ+Oa8SAI5tEwVUHqgEBWQZ2OgKlc5gAqjr7nLmE1j1deyfzu5y7ZtvSnzjJ38czx2uvwV8QsIHSHzHRAcQASkR6808oM5nDj1T2qYudobY/644id+H73KMlprPd/OYa77U6RwLX8/it5ftIaR7/Dkd+D5HPltRjn+0sx1QEkAm43msd6FDiwEPgsD2MM6CtGNA9HoCu/05bn1KuQPHQKg+EWbwLP8bNEgH0UOAgLnvUyt63AUm5pKj2SRnJqweCn/SI+p97gL1kR/ccsSnAKqOad/6Waakti6wCfBbI8zJe76CIhZmrncEEFMB50eijDFggX6DogKawCZK4eRWZ7yiBHtyOiMS7VvqgpJeYliQGaKnR2hMY4sglzdEadGGcswiTqKTAL558XF4eKEGyVjGJthRkOJr3U/gGEi/YdEn0bGkFzMpxfgkbolIwhULhaRDBVGRJpxMZNkA4J0EnM1+g4zcSxbwSrPwkSB+bE8C8HDJM11OSNATTy9lEkvHfbIni5KS53BZAAhMjG2nJF2TJKQACx7zi3dQZtkQ6cw55uQBdfT/pou+FTEPYRMvvxxIMNGzpwt0skrfDMAEyLfMmACRhf7ziQNydzLnCYqNM0uKtQDAw57EUyDzPEtC/+USdlHUJ9wR0x1y98hBIeBaDWXmA09ozpw0YZq7ymfIfMcU73iHodvRz3eulZOH/iOiZuGhoyx60dexi1PF3NU+rxJSf47UmP0bok6EcsuBfTMCycvfwaJzKZfSFCc2xal7EirTmV6VhB4SkyVRSrQi/Uo8Ra3i+ZAaQUXWZAEGsGT1/iQolpKsijNzKUyxSknFvOc+9VFQ2wJXUaGRtXoe7WdFj2ql9AU0Kk0V25/wqFgtDmhcG9iAA1iC1rTCJKuMsc+E//BggdJOK0EJ3VRFhznNaebTSh9zIUPfyFh8JrWkNhmoBZnWokFlD6MSclYBhquAhyHuJqANjJvqo7QJaCNF+WqAmiJWWZFWFAIta9FrrQSjthjyh7UdkmOVehP6iBKX7PwtTyxlLwyxyFtQjZmY+pncveyoUvZS0ceg+7EJ3G1NPpwc0DagAPFul2BDFSd419rY27p1JmYsk/0Omlpb8em5fTtoHm1SX71Mpz757Uf/chjfDSQgwD4FGmsNjDnYmlUnJQQoeW1SL/dOGEv1US9OhDI4EbeYSA2wyjI7vJcBQYBulvNYDld3tyTGpzkVvgmnPLUiH6Pvi3iIskiFJv9j3FbUlLbUr/3GJ0kp32pwulvRGhHnJiJrx2wT6Ec//LbO1vFUyz8UZQ77QTitRVHHDCVn9Z4JS/iER7dZ+/GZDkqer7GMhaEq35M/29c3b4Buij5ena1paIB1MYcng2qWddzMQXt5tlBCgD1dlL5PSYCfXyXhoyfsq2te1c3aseQNA2U5P/83jz21SRHFjMN1WmBZNSm16ggdk6uaEXytBlRil9LEe/oNf1pqc6XxAh8D+IjY6HMe66xZJ0fteChOFNs6q0lqQS+7pG662p+ibSUsfhesDuhTih4ZI1tTGpWB6fa3eRtuzBkuftVdFyCrNyRCqlfZYmP2LvWEq9T/0XtIUFVTwqv4aII7rt/ZvvW23UOfgc+ZrdxtAN5s9UHV0Q5LD3d3xOFdHobqmdWZ3rRnf5gxfY/yftgL+b+1OZhF+XzJ+PSYdjPJaUAzc6C79luGIrngIL5bkfKBVfGS7jef7RyWGfMRqHGZORFeMya4xks06YZ07eacz0zGW8iDpd7peRyHH1MA1KQW4zEfuybeqSGS1Z25AwSZJWDtOUfvLsRjezbtcCkPOsVuTLy3aNxro+rD8/vICVgTxYs9shfZCXh0NiEexlvy3zi7Vy0mQGMEJbvLNIzckUdePhlTwGEvrvTL//fJsZ7JgCg/ZlJkr+/hIz1N2NZyyeYw/6p6/PpLbkUKFMn+efu0K00gf3uG8qkArj0wzzBuAXIPNtjT1yjq0YslmtAnvJ9S/vKb7/wiYW9B0g909aMuxJXqmPtbZSLg53Y5N3tV8i0QcBXot1j00gBoI0Bc4yFhFBRWlHynViOnh1KEwyI6xHqtl2zU92lk93wi83+2x232cSLhlzmYRH4ykihmVh+DM2G1c2LhMTH/lGjHlGkSx0wbpYFpdABrlkdfR31Yw3jOFzIdUlMnyBn5NoAGSIMMQCiTAwFdNGETEE6dtS4VB2mi8kO2FAFas4F/IzNE+FtGyIFIiEMZYgFHIVW1B3CJER6KN01rqGRM8zecBmN7Qv984fNqRLgutoQ1RMM1yMZMK6Zpi1YAo1ZFNRF27vVzLqMNtZZ/CgCAeKEpZ0ZQcLeGqgd3CChppsRDA4I7dHUyMJIgwlcvSHY5bddrEYBjUjYuBaY6/qdHb5RvRyiJj+OGliIxNaEAwoiJb/Z9ESBnqvdEmYOAUrUjPAVTtkRXd7gikSZS1BdAroiMBJg8pGY2h4VgMeMvjSJ8YoIAJkKIZOc5vZguEuM6wqgA9UCMRfaEqrdbZuItmkQrV3Uew0Q9r8gzrKNIA3IHCqOB2nh5jqdFEKB7sJVDDoM3/hJsfzWD16c+IpNjnvWOCiAA8qgXYWSMuORx4wYfLzWOJln/IwR2jGMYcdxoVKXIkC6DjD1DCunyRv1IVi8zAfEwhSamgI6ieVbIf9UzAUbiZDBhLQugkcLIkR0ZF/HWJ4flidwSi8pDLDtyKlcjYsn3aifmknuiNHaIjG3IEp7VaN6IkzByAQjyi4sULIMoiS5DlJuFi0cpH0ppAUzZlN3XQ3uCB+CngWRYb0HWElY5aaE3NAJUAEeRfoJohTHZMy4URq7DNs7Rj7rSXwhFKVTkTsESlAUYf7G1WRmkkXhpD6Zpmk3oV+foLVEoQDByf812VUD1jUjVSotFlwxlhXbYM8f2Qi/VOQQYmqiiH4WJV0Bjc37ymaACVTgWOhpZD3k5/wSnmZoRgiog1ZdQeIezh3S8k4CxGROMQzTH9DdIMSz60RwEcAfd5DE1yJZvFU2xNzutRJym8k7pNzGqFlS26EI5NhNKmZf2MADSiZpy6FfWKYjEpI4nh3d7hkzVJGl6Ah/mCJMpRSQihFZR41I1tJ68ojb5F55u90UJUpKmJHwwZQAlhyEjaFa/KDlKeYmnOQACOp0FGhpf+SMiloyS5Xt7KFN0Jyb9GJLtJxPQsaGXyZUZ9B7AOTtCog2kkB+DxYcnBkDWxjMHQInHFRMvmpcyOgA+QKNElxp96SedqJ2Ft257GCakwk24VCSHGBPqyS2AuEylWADBeaXhRKKWVROOF/BcrrkvWQoTLwqdptmlXwqm/8EDG2NKm5aHpgD2JH/lhwOzT13pfnGKJk/aT944e3zmpuQRfDzHVGY6e3IpRjQxqExpqKdJoGEaGtYiHpbJaq0ZKFNpZ7T0HYsVV1PCqIGSPJU6E+nJoUSSqTu2kLuJmWJibucGlSe0UmsiL0pJqIUqo66wqqyaqKNxX82SXbM6MIbDaT56osSzQgPDojYRrHJKrDfBJ4D5MbIIXG+Zev1ViUX1nACqqtaql8o1Hx+ZoEqGXuyGorg6M+2jO/0QVb+Frpi6YbC0VjnkpPknEzx2hE+0UhhpLO8orad5DTJqCPl6rdwjpo0yWNh5rLJnqzFhXlAIKAerfcB6qUMyp//rSpGzFw9Z4nQxcTX6lWaPQ5MXi7Eb+bEcOwAfC7IHRBbt6BTckSpA6pfqOKpjx3Re4070ciI7a1sSwEZwKBMKG7PqCktdyGqxhXhlI4NXGLU5BF3+dQG+0xINpZEAurEyWrT6unxembTH+WSIgpTJVqIuYSnDBH5yVqZBiHH5mCn1UiHkSoBcmbAwO6wM+4FxFXvadQDxgFA4WyPV1jFjJ4QXQAqgq5abJTnWkrFFO7R0S51tWUXjcgdN8Lro4jWYUp/KapPEJAGEO1eXN5gfmGoE0iksyCvsdq6P2yIym6taQjxkdTksGrGWoov7NntAUjt4gx9G+RzNAbenO7f/Rau6OLG39GEiFjBc5LshctcV3yeUi/Yn3dVOk7YnDmCKsPWFliqsxvu1t1kjDIY8T+qerxSpkXiA1FtIvZS97xi3q4q63VujSUEsX1GQQEKNzHla7ssUbLMoVbuyjqMr7WtRuWoiN2Q4DvBKXQu5mJJRTXSk14ORPQSCOnsAC0okFwlj0qG9dKvAH+u933toDBBUqzMBBaAAFwABJhaxbwUeQuG0sNWCxvtfByquQcldylO/6Rq5MJUxS9OrCblYZLOJuKuVLpi5qHLAdGuaOJyvOlxekGhB+PgwMoNnOXFf/arBZrqDevjEizVrYrvFXFu8L4K/01cvV0gkHnWf/64Tgrgbbd+ymF91ne1oADZcxmdsrWlstwtwOlfYYju4Tt7iMEMsK5lbl4vifSrYeyl1OXyWfZ8qsefFahKwwlS8sIwCUvHaoSJjyMYSdl0ExsvYKyt3n3nrT5EsydybwwwMSuQxUBHcajs4hhyYIdJFxKJIWwbAtJu4m080uB/jUYGXslw2JP0gAU4aqCV8vwwLUvZSZR26Q8eJt4FstYnsMXJplMAYfP9ZxglczGh8zMAlV/zDzIX3OMWFBxCZYs5mjnige8eaYUh3peSjpz10OhLWIuHcnZJTzn98zqTcOGayIr3jleBJjzAcw95SfrMyUVp6z/gst0S7wK2qFP9MxasC1DNCvBLuCYLAWrLbCUKhaR5fZUbcsjpdYywYfbzpd2TgA4oW8FFGVaKQGMFwZ2x7WCM4saUrnc8tbcwvnRQxXZGLNgENQMENpV6BV7IyDSivaZLsUh+oU2+11sf2m9Ez8ld+uWSdOig3wUu6DJjLGIpaol5WfdUsnbr8TEfeNgFenUYh88mu4c4yoVcSosQj6Fvt3G0gBm6Zc7mQER5+bNTvsQFnU4/Qg6LLRx9XA9W0EzLnS1XB+I4W4A6QgMArPcmrWsnCZyk+ctbX11/FhSBkCYwz4VJt05cKHaJpNryGXB9Qd6RzFCVxfbwSI7+qBzmmehy62K7zerP/tNLaB8yxhyrYg+3S2Eoy8IE7ul2R1LjY6cLCRHrBi7In5u12fDYwTozL9WRE8xDOinkXzl3FjILF/vgyMCcvyi2phSfOZgd83B20Aeql4I3VhL3VmwQfQqO+iY19/LISoPzI8aGhJXsAqGw8hvjXj4zUrMZnTkpU+vvc+MtFO5OTfCyxeixuGVKUkkTG0zoAHvvgZqzPlFzYr/O3YgeXi+ZiIOMwvv3IM+Pepq2CqBzDi0iFyAuNq6ZdnXqhXyYVLL5hKUpw2zzV4AkA0xN+QuI0ZhdWLqqRq9qlO87j9kDbiBqyT3ErBUnkVTLfBCeT89oEmiVp7KKhmlvXUVt5/90lVThoABDgRK74ysojMX6cXj1UQ2fkcbXzxsw0sRy4dAipfe5oujnu5hAu3nKutIhuIeeN3krWycZFmAwVuaXIMee9OoN5025ZQewpX44e15Cu1/lFMB6lLteCViyjoAdo0tIB0elnw10KCaAe3lo93kqhidvRXBEcPs2snPGH5KLZn0bFit4yqlT52yUaV+nmkEPdbQ6g645XzfRCChPtMgGJop/qHLA65JYz3wh5vnVSaGre4Dre7M6+zxL+E3OdxBDs1fXIxlC1ITZ903w5LuP7XAvjOfTGOhDDJgMSRwG9euyS7lO5xXOTOj0TOdVChwbQKSoiZ/LZhnKH5v/JRsZdCvAxKqPUEOHQPlWSOSHju29E/o+2RTDxINbGsh0T8rmlVVo/0jfhjvG4vYuFp3Je4/HiVYNbtDHu0743vR25PdJypj770nSOndLDGPMy7+81b/Oj7hQLNSDx28M3xHsX/jzaENaLSYqAJZnjItkE011rHVOIRleEhBRSv3SAWI425HEWe9PT4z6dui8sFfbjccBsXrQ+MASWf/mYf/ldOgDVWsa23bc1N30Z4yxY84Bx3620ow1BTyiXUlH5cZ2CfJlpG2TDyR0I0Clebn+CL6zIlKkgBn7c8usSU0SmL/c+W9lVLYxwPvOb3/zO3/meD+Q6AWVawihiYmT/pHUho3r6SxaLPqsuhyy/MbnoMXKes0V/LnO5EtrZmSrpN9QriCGZQPptB+gtlKiKQLPkoJqU8OjjAGFPoD1DAwweRJjQ4LWBDR3a+xdR4kSJ9gBcxJhR48aMCwgYALkx5EWQCRw0sdBggoQALV2+hBlT5swILyVMaEDqTgIEBi4uABqUAIImBSLUDDBPab8DOO88eAAAJAIHDCQgbXlAAqkEUh0owNpyAikCZe80YAlzwoWuUkuSWknTggOfZaNiXACV40UFCl4NMPRQoI+DgQUfRjyQ4uKIFvc+hhw541STKJEeiHkA80zOnQNovVnAQpOuQRdkHNoE7OZ5/eZ9/5bQoEnPnwSaTAgbQIKFDSUv4HYZoYCDsgh+bw4uO4FPkA7gYtYMMwJvnwAIQH1w+qd2kNUB9FWgIfHBxOURM17sWPJ69nsT4LGwUgLyrPQ9u7T/UjN0CQVmAwBKI48SUO2olvrBT7gmDEDAugcSaCCC6LKizoAENrDgKs3WQoAAAIybgL6mSKGLQapIiSetrIKzAALvtgtQo+6m+soCAQ4ryCDzdnwIPYrUay/IIE2C4AKV5ruvs/04m1Ar/xrkaCgCwcptHidJ6/ABBJ7Db7fepKLqAgsYGG25i4iKUL8GXDTRuQLmEzGCCVos7bQX95LyDvDqOYwwgwzjMVAfJ/8CUkhDIxvKwiIZSDG/JOtjkr7YSgRwMgSoKjAmpvqbrUE05zuK0+WYu9QBB0atDoEEngNtrK6GcuA3OJHbkLdXs3NrpIuKu3RK8BS48aEcB4AkUGMhGrSxQ5dF1EMGKyNFJQM/c/RR/V5qbS2eAOSuO0wVUFEt/5ZTFaUCJiiAgSboylXGGctyTqV4GCDRAHhJeVNErbSpF8bJZPT1V2AFG/bYY5NVllmFJev1DjHflABJa5NUap7+NuApwBlLOgmt/LSSrScLT2pi3Uu9akLMlPpqwAILLli3rAQcvuCODs+8oFHpDtBmLjNNc1fVkwQGL1iH/ATMYGMR/qfQhZ//5kjoJkhhNNyJZ6qYqQnY1HjjZ5tQ6ePdEnD22eUIiNUCotdW4GUHVN32zDsY0EbilkIl0czHhIaA7YEJLmxHhQZPiBrFEHYa6kNnjFLVO6INccKrNWXqgOkgINstkrqTGWyJkROOuLJyRclv09teECMLc444pt0o3Ryjjypbux5XtriGcIR41L33IQ5PNnHFhewOz+JmfnilJWV6beIIcrrjVCiLJ4lAj2E6IJ63r7voDrVPB9+CO0hyDrfcpttA5F2tOzOBvom2wB0Ncu/9oGLNO8hwpZkWfnj/eYUWAyC2H/oo5WogI8W6UDWSkjTBKrSKTfoIsIAtgc+C4CFF14MIZBT9XI4nH6nL8VRDtChwoBD1SwigEkM/VyhNIPzzXwwhQyOHpSRi9mneAUNDLwWKrDoW8tx+bnKBLzmgARdEogIaQBcHWGBaAZjTqUzkLdr9ygJRqIfRXIiY/G0RWcGTYRhFQsWTqA04k8tMxG6SEwWGxE7Wm0AcC0DE5YwwiUlcEAQsYBThzCVRPUnAhd5nRQFo0YuH6aIXYShGRuaqeJh6GJySVK36SEAb6YLZ26CSpwuQIoEYM8AF7jhKBbAlVp5cV6UstAFRCsxGhjzkYfxhkBYe/3KRjQzjxqwzlFKZS3mOIuDyZNIPYq5RJx1KlIkCCZJWkvKOF5hKWTz0IYcRzZA6iqVgEmlLxOHSm6jxEKymdiQk5ZCAEdAQ1gyoFZwkUIoysqMz79gEAG0SAAFTQD06gIqHoAKF/6yf/mJ5y2/iUprTpOYFBPhLakVsAn3hYH00U7GXSOgm6jLTBBfwFXk6U3Sw+lUUhkC/hwDUpIOrZTYJKpmgFFRxIxtnPOSDLh5uAD7nuuFEc4i9/mDOJxQ8YkdJ2QBPcdQCr/Dn7hxyUqbSMpvAG1T/OJIX7VwEKlV1aXu6E8iTUM0COtleSYrUAJxSMitz0hsp7lgBtrbVrf8VSCIpPqRWSCQ1IdocAD+futcedbM9La1OS7NKPDAdL5DX0cuM0lbWzkiAASXSExLdSgHKVpYCbkXiHVTzihMOjq+f3dFK2aOrx3jNtKdFbWpTq5FLMU6aqqOMw6Q1E60wYFTfA19bLbvbyrb1gg044il0B9psXoN+g9PrF6NqKOrBVrXPhW50N3Yp9TW3tGdywE3l0yRXGWCQp9Mtb8V7WbheEBLHVQhefUBc8yBNd4WAqo+kGpmtqgpugcRvfvW7X/7217//DSR1BfxDr8lIaFRbiYRAxi7cmo6tu81AhCUsYcuy9YLU6F1Jm7rhprrCwx6OL3rmS98LadaTJ0b/cYpVvGIWt9jFLc4kT1C7F0wxII44+Q9HwVsBy07YxxOusAU5kOGlctjIg1NhYkQbmbtIxX3xUWOUpTxlKlfZyleOWKikrJmLkoY5pP3Xmah7Egik7yLNdDCPKTvhUbTZzaMAMmUtfLq/DLfIR+YwKvQs0ND6tT0TdPJtZmVWNBY6JhUzIGwawBbGyUgj0owK4wzQYLY9eM0RfnOm4UxhOZfXb/UgcpF/x969LhkyZbEQHnAjOUO3utBaiQdXprKe0XlNxw6urITfLAReCyHTnJ6z6eyaXlIX+4V+Zg8vIVAAQrva2fdxEh4C7F8BV7u1BohnpdVMAUy7udffdjOn/y8LviETztjGZtoAhCQlUkgAQc+GNxo31AAG1Bu4926Zy/St77yJDM3avnQGvM1rDBS81+GOcKdP5wo7i/rcA0WYDwyFgDvoLN4Xn5xFg6kZdFJ5AhgFCaXXtu1uj4LgBUc5BniN8N6eLgoNHwiemSoeRSKbPQm4QN12inGeZ0aYkdr4RUskcoFZmtsCN7kQUp7ylbc54XI+HSRgLhCZM5UDNQejkHBut553HT8EnOTGQbYgAwTVb5bWddKXznRfb7rlp5u6Papu9S2aGjIJcGJuvO71nU+uKRe4VG7VnPaTr13lbX/6uOFubg3zmb0HobnB7D7Ve+Z975dPSt+vJv8nehJA8AFvc+HX3vTEe9pvcX94Q+g36oPZfD3v0Tvm997sliQ6ABFQgAMuYnaAXzr0Sjf8wd0O9cV7NvWIod/VW5/1Iak69rK/uBDFvp+jbBz30vYJ0Yuea6SrffRtH77i/SZ1xhc5ueeG/PKXGySQYMhq0Md4rfY9f/rz28sX0f6v0N7tXi+96ZvOAIUznZcrv5g7qb06CNbrM+YbrXJhNvjruqZoEVOhwAp0gA3AwAoMsB/6t5Ejue77NnBjOeIznTozvoZgKoZ4KuEaAOVbwPVjP1VBEUmCwGdjJ+o4mTFqtNjxiWyrNO7rvqQTPqcrPXKLu6aCr6dKvxeUL+b/YhA3ySlqYbUanCQJiAfxCQmEcpcZGTAGQRsLMrq00zSEC0ASFDbUc6ry0ACD8AcENIjIUzLXk4wZIRBGkY8tm7481MM95EPqO4qPuwBK0cIZ4huMQYAHIID8078PLLk3izPyAh9QQz1jWUNsyiYWJJz1CjHGGDF3yYgTGZN6E0XgEqqOure1cRsfiowYcRxSUJuvuoPr6EAP7LEf+7EgAx8TPMEtGgKDSMJs6h1NPDYGXI87uQiTsEBTgYBlZMZmdMZnhMZodEYM3IA7iB4KXMYNgIBrvJn1eKOuOhJ0+ri3ubU0gzBbLMO3A59KLEADVMEdqcR3TL3JYz/pssd7/+Qcu4g0XXkt4xmdeyqSPYoc6kMrBFDERdw2IOStYDsdSTxCFBKMLSCP46PHwVIc7MCVGfoh2RmzxyEnmcA94vDBszO68RJAIasfDYPIh+jFAfjFc6tIi1QcwWIg1QKTMsqXn8OPAojFBzjIoivJ3WLISESvXaS6f2rDh4jHeZRDmZQhrOIYkslG6ekV91GoFKFBmagt4liAyEqit3qrUSq3UGsIPRNGh2A4S2wIdny4mHTK4YEpyJEjeomeytij6mO1neKyWOuQ0/jJUmQbAkxJg0nLARCMlpRH9nLLt1wcMHEcMcFKAjImMTmjQ6Mo2JiAWGOX04AQwLwjCxi2Sf9sr4l0iJY8BXRrSsZ8mu5wAI+smygMgMrhGW3QBrDTj8uUEzbiCWTqHs9MopZcybIMHMQoTMFgS1JbTNVswMpglNfUDNdAtNc4ANkEJi67iVLyqUuREtqYRd8kmg4wKZVMiJcciOJkyblLCBdUriZUTm8Emn/klnLBl1+iPUjxuf4YDYzZzeJozbfpie70zr7QxeA0QMK5n4ZAmsNEzwRsiORUTaDAFWsjEAugTa6zlin8Q9HwKQaZinJpgHjIiRIBUN8cUAIViFk6iFPARMN8iARVShWF0RiV0RmlURVVTwcdLOpBrI8AJAeAgPm8IXiznDlZl6konpKIj3hIEZzPeJtQClCBAU+mOkz1tAfgTDJ7ME+KTM321FFUaw6USLDn87uIEY37MzCqgDJQkRMLGBWweVILAM4D5JGCaVHSbMstbc9P9IknO5c7tBxXi5gr7CHTGrMMkaTXEA5UwTvvjILQDE9jsdOBcNE7JcY8lZ1dkRqB3Dhnyx6MghIaozgbm8Ls0T0aEZNSrIex3LCH6CwWVUk4FIgsRc1KtVRuuSePpE/ksL1X054P8seqUB6YmI8GSAAtERqV4b0kStWibCrxhNUCPb/BmMhCKiTi/8LRglImXLWbKQRUNuVNLTwo56gbVmMnwNMSuwwqSIiCv8ynV2BHPBNPV1XJxCQIO4WEe4UlrINBl7IuksCIxxTIrIy36OA87ZwqWIkP2zwrrrAO97EiV2BBVOCAV4gCSPgVdX0FDnBUeL0zg4hWFPTYhyjMhECFQkCvZ10aPM0lMKOiqSkrhRVSISqAttiI00DYEMm8itKWBjGActQAFF1QOUVLhDjLO9uCOgUolOWRa80lq1SAl221XdXK0MCDT320ofCeyMFNOaGjDzEAK1LVoCWcVo3UtSxbkB0Aeh0WFPrYpVXZRoqt+VQwbp0YqfU5bVg0vdmImz0KYmoeJ/+ho63aE2rQgMI13MNF3MRV3MVFXEdt24Fgx6JF28ctj85S2vJgWmapNQupoSPZ1L2zwjKhDX9Vnay9z3hgtM0ZIc4S26ai3IEgvwGQ3AI9WoOxXMl72//5EKu0sUGDWRs8pzkJxAYZRDAxANPFHlirl67piw4A2tZ9VMH5Ey5aCKU5CPI0j8xdlguBDwVgKImqz4lpFTaSImMUMz06o0RDJ81skOxYgJ5VgChgVugdzEA5iNk9yryyXrVkQhH7pp4Ik7uk2wjET5iRMdL6oVJJWJdQ3znSm6BAgLaRSPqN3kCJXfyVO4OoXWPBsAFIqf7lRKiJEXepDIUyCp00tAH/vps+CkQZcyTtLJsnw9mY4Fqafa2+6GAK/qctGk68ckmDMQgFzN7cXUXtsBOOQQnP/d1X41aOe6jRkB4eLAlkNBVtBBcLHdJA9I7iKJrje7zpRSQTNUAhxlwihowR3t2APBcUNjTNu5umEI0LyE6r3RybCsV6U5uasA/A/ZIR7mIv/mJ5jdfBwd4Mft2+olWF8YhYoRIxbePL1NkyLV/z/RA9OmHq4wzh6Beqkoo/BmTi6uDyuNdRHmWEwN6zPQ8zlgwPWZXK5DlIhg3RgOJR6YjtqGTLe5Sx2Myr+o6++ORiC2UXsiuVFBRVjoxLuYCI4rvg6CM8AKXiwUi8oKAC/6mJy1wntZiLnzINT/5l0ApmF6rEU+bfVE7kZcG2fLk8J24bZ6Zl2enHf50brGgNbFkeCZQgbgEKbu7mz/pmcPZFYh7icg4S7TBICfGM6ERoRKOt0LAAPNjQkaBJjajDGbbPrxtSEhldjNgT0qRTe5jUHIZc0hzm/HVVpYqlfnah+y1NVG5QY96L03AAZX6UhK69zMjNWe5XwZoM68HiankdnlWdXyFbkmbRu8rgiTRqhFBBhNAr0TQPlFaazprdwbmGotVe1DAAVZM36OwMFpaefnVn+AQitLiarWAX7/gVAUAvombro8ampD6IpT6I2iVLDh7n/cXfwbFql97b//+cAHmjW3YSDWcGMxjRjnce6/e7j9fx19PoCwvgk6NOLgb16ETKYU0EzoEYabceiOOq6rU2GKjG67rj60dDZop2tjVqYbA27ABBrEC7HvE1a9J97Mg+arTF7QLN7fzdbSyFVZA+FtEGYtklbYH+s9SIBxXWSuz5QyjmzTM2DSOG7WB1HlfRCAHtbTvVbrXcbnll6d7eEeE+FoPA4IDeV82FFYt7lD9tCdXGmIN6rQKboToEFb97kowADwXs7uzm7v727rtG2kN2CPGGVOJ2oat25wR4oAvluKZYNEqB0F1yLtZ2C54O34qKgMfCi15WgJfcb90Gcd4O8duWXkEuD+D/9iLyLu7zVpihyJkL140C0IlRORk07pYdBJggMjRtwYtfkccPF/EgJ3Eh/27wNo/bTfEBuFzzZk8RBoAmihzass7+aOHRhU+O0CUshyMYr6gGsBn8fuz/FnP+HvMRL/KBKLfhXgjjYvM2x5+Q3Z/S1ghccR+PIVjosE4Z9zJVXBjmeI+cBGwv/9SvBQ93KHMi928yN/LDSHPb3eHKfcM4N2724GVFSViO0zJAxBz1gUuQKAoLtRZ0CpnpIfS20QAVAvIhV/VUP3Np1V9HF2NWjXT1a/KXWiXtujHo2U0KZxYgQmc0EvX/kJ1f+WBEP/RVT/QRLw8WPE2+mlTq/eGU/5104tkqbUwZmHnvfizeXpeKT1fuSAmZDxl2AYUlVk92Y190aC9kL5LVw0Byt5320apJC8mv6mraAmFjJdEN5bjyx6aGA+1sg1BPcz/2VC/xpnI8kT3zd2dy/+30LTytGPLQyzggCVEOTueLekDZ5LszRTfzc7dfDqNSpDVxlVx3RGZxQ4lo+uL1Q/HQKB/Ti2+X72hUHyZjgvd4IQ8UPeP5nvf5nqefhB9aAG8IhifnlBcSnbYqjfQfD52VmJ+NzfWJ+C0EgM/fkUf2ggf5VgdGgxD6hmh3wSBbU04yBLfVHN2qIMp3KXcsm7FakMinLbB6ewj6MNb6u0934qJsxP94drsnWZSv9Votxgay8/BVCtAQdDr+Do23eWjP+azPe+Kq+8QIe1YthMvH/Gc1+7f0dYG9j8OPGHXpRvyueZXEep3H+Y8v+WLbpsOofNyNd8FP+8K3FtDHMSjBqnwqhCudfB8GaHQfcRRPvb3vE66Pw9i31NkfNPEdO73VaDhtfLv3fdUH78z24t4vfqKHd6QXfBIGGzz/dv2IGNko7LbBeuLv+OkHfp2vUuN/KuwXjNff/sDvfi3X8c84IBwrfzide/gHCHsC7Q0oOPCgwIIDDipkaHBgQ4T2qEWUaPEiRowKh2S056NiR4v/RpIsSdIegJQqV7Js6fIlzJgxDSSgaNJAwoGcAXby7OmT5wEJDZoYMNBSgQUNFhVy0PjwIsioTxNOHcgBZMisIZl2/FhVqz2TYkeilGn2LNqZRRHUvJlT58+f84BKYNAEgVGWChQ0lbjR6cKMUgNTJSzQq+GBQ7CCbYzwWkFqHV0phOQ47FiTZdNy7iyzqAEHeNweiGt6Hup+Qe0iaLlgLzXLjyMD3jp1sETEFil+vez4b0bdjv8za/Zs/PjKoqLdmm6eWsKEoQha67XA4ZrEqwMk1+6IG2Jvgr15J/b9uyDHjIYYdyRecjPy+GeN0sRTAGfp5j5Rz8tZt0kCeOmlwCtfaeddeA4Z9l1u7GlXnnlgKcQdRpQVJFtW7p0kH4efFVXTfXDp1xNq/g2VAGgr7UWggQkWZtuCtyUoHELkRWgecBWyd5GGIxnSIZAufdhEAREEIOKIQAU1FGhFqbjXgQhF2Z1gMsYIoYK7KbQll1162WVWOV60nosDGdLjPz4EuaZK9RVQ2lxJ+hRUdAA2mVdKK2rQIpbg9elnloAG5+CXhRq6ZZg7DoQYhhf5gKYrbK7pJk7//cQpJ10NQHCnkyqtiAqfCP75oqCkDjoeNamquiqrrbqqqIKjWnjKZGhSQ52k8tFEJH6Y/iSUnZw+qUAhoVY5qnhXBgrjjVrB6id26l2THkbUoPlPArke52RRvObn604m3oEip3gCsCJk5U0JVZnJLutuVmQi2yy8oo7qgw/tXXuHtsY1aZME4PYUlFB3TIfXnQMqkG52ZT5bL8Q2ZuUVvYkia2G7+qL5Y79pLbAAAEVtwJzAR0pQl8HmsrTAAx+v2Nu6DbfLoEAYOztvxQ/Li7NFZ14bacdnsfwAAGyRMgGSmBKsqcotPdDya3tFK3O1D0PMmMQIVnwzsogVZMhl/65cOxKuQcP08ccIOHBTyW+h3OnZTxOwogAXxTxQ1qK+i/fDGW8N8UWgIjrc2P/wa3ZMaC+AQBPxfOvr0g7ALSQALee5V90W3W2P4DzTfJDNVf7NNYx+H1T4P9QgjhYCR+Mk8GqbNs2SUU+n9MBe9Vy0WGJcNvb5QXn7xfPffReEimNio1726i+1PsHrkKOMIlotEzA35poXRKuftHHNvZ8U1qio6aM/CwkH1IKF+khNNP+SkwhYAP3jzbnNgAPMo7WiApkftGdVfMc1CE3oIqEb3uh+Vz6tPIp9/3hfTBBwAaQp7WT4E1Bn+Nc/hChkat3z4LFAuLfgsWeB5jOhxv/YdzgItoRxbwrApUyTkwkwwGCe0WD/vKaQQmhpAEqxGA9FV7UB5IuDxEsg4G7UQAc+kIUtTAADJBDDuNCphvozCw7r0TkBNmtwQnRKER2CxPMcESNMJIn7nAiAj6WEAI2r35wOQMNx3VCD9UgXF7toNYcREYFjVGAZJWKtM5JNjSshQAKOBsdwQccCd7liTLJYLB8icYc3Q1AYwQO2P0oIhYsiZEkMuRK1KfInM3RkgDKoQQEI7ocnHIAInYLJ4YmPk7bxh3kgAcqSpNGJcHPABYoUgbcEpQAWMBh1ZucSDVqgblYjI/H4mElT2TIr16jl+nZZkmyxcHKhacIFLMD/gAYwwAIWwEP+VMk/3VEzZwUJYidnOZsBuKKa1RykNkkCSQgagC0JcABAExAgZcLEjv4TD/JOGEutVWmahemLPZGIz3zqU5SS4t9BqZLQ4gVSmuwawClCKtKRkrSkIY3obig6ln1a1DgraubwNro1FHr0Ing81KFQGjyVZoalLVVnRhGaQJqOqiAOjRVODaVTXfKUONz8qXzoFtOhdrSofeTkM5u1xKZmppdQPY5UjShTd/qmplj1JFgmylXi+PSrkdygWKnqm2vAk11HTaA/6PrHra5VQ1516/6QspQBjJVesDTPJjEyhCEk1pY+aOzW+NpXNK0QsMvEYVDtkT5sZjarnjr9bGcne8a7WPZyOMweaFOr2ngpT7S7tGFLT7vKzK62tjo1hA9coVbXqnRcbV1TFOphznpAwh2t5S1yk6vc5TK3uc59LnSjK93pUre61r0udrOr3e1yt7ve/S54wyve8UI3IAA7
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';

    let inter = setInterval(()=>{
        let lists = document.getElementsByClassName('snippets')
        if (lists[0]) {
            lists = lists[0].getElementsByTagName('li')
        }
        else return
        setTimeout(function() {
          window.location.replace('https://toloka.yandex.ru/tasks')
        }, Math.floor(Math.random() * (12210 - 7865 + 1) + 7865))
        let nameList = [
          'Модерация проекта "Аннотирование',
          'жестов',
          'Есть ли порно',
          'Модерация картинок',
          'Яндекс Маркет.',
          'Оценка визуального качества картинок'
        ]
        let mainList = []
        for (let key in lists) {
            if (lists.hasOwnProperty(key)) {
              let button = lists[key].getElementsByClassName('Button2')[0]
              let name = lists[key]?.firstChild?.firstChild?.firstChild?.childNodes[2]?.childNodes[1]?.innerText
              if (button?.firstChild.innerText == 'Приступить' && name) mainList.push({name,button})
            }
        }
        console.log(mainList);
        nameList.forEach((name) => {
          mainList.forEach((el) => {
            if (el.name.toLowerCase().includes(name.toLowerCase())) {
              setTimeout(function() {
                el.button.click()
              }, Math.floor(Math.random() * (100 - 10 + 1) + 10))
            }
          });

        });

        clearInterval(inter)
    }, 1000)
})();
