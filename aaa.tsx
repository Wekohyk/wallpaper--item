// 按钮样式的单选组
import classnames from 'classnames';
import { useMemo } from 'react';
import style from './index.module.css';

type radioOption = {
  value: string;
  label: string;
};

type IRadioGroupOfButtonStyleProps = {
  radioOptions: Array<radioOption>;
  value: string;
  handleRadio: any;
  RadiosBoxStyle?: object;
  radioStyle?: object;
  radioActiveBgBoxStyle?: object;
};

const RadioGroupOfButtonStyle = (props: IRadioGroupOfButtonStyleProps) => {
  const {
    radioOptions,
    value,
    handleRadio,
    RadiosBoxStyle,
    radioStyle,
    radioActiveBgBoxStyle,
  } = props;
  // 计算白底宽度
  const radioWidth = useMemo(() => {
    if (radioOptions.length) {
      return Number((100 / radioOptions.length).toFixed(2));
    } else {
      return 100;
    }
  }, [radioOptions]);

  const activeIndex: any = useMemo(() => {
    let res = 0;
    radioOptions.forEach((item, index) => {
      if (item.value === value) {
        res = index;
      }
    });
    return res;
  }, [value, radioOptions]);

  return (
    <div className={style.RadiosBox} style={RadiosBoxStyle}>
      <div className={style.radioActiveBgBox} style={radioActiveBgBoxStyle}>
        <div
          className={style.radioActiveBg}
          // 动画样式绑定
          style={{
            width: `${radioWidth}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        ></div>
      </div>

      {radioOptions.map((options, index) => {
        return (
          <div
            key={options.value}
            className={style.radioBox}
            onClick={() => handleRadio(options.value)}
          >
            <div
              className={classnames({
                [style.radio]: true,
                [style.radioActive]: value === options.value,
              })}
              style={radioStyle}
            >
              {options.label}
            </div>
            <div
              className={classnames({
                [style.border]: true,
                // 当相邻的两个tab都是未激活时中间有一条分隔线判断逻辑
                [style.borderHidden]: !(
                  index !== radioOptions.length - 1 &&
                  index !== activeIndex &&
                  index !== activeIndex - 1
                ),
              })}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroupOfButtonStyle;
