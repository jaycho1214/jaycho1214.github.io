<div align="center">
  <p>August 20, 2024</p>

# Deep Residual Learning for Image Recognition[^1]

  <p>
    <img
      src="https://d2l.ai/_images/resnet-block.svg" 
      style="background: #fff;" 
    />
    <a href="https://d2l.ai">
    Source: D2L.ai
    </a>
  </p>
</div>

> Winner of the ILSVRC 2015 classification competition.

# Prerequisites

- Knowledge of VGG networks[^2]

- Understanding of Convolutional Neural Networks (CNNs)

# Introduction

In theory, adding more layers to a neural network should improve its performance, as demonstrated in the VGG architecture[^2]. However, simply stacking an arbitrary number of layers doesn't always lead to better results. In fact, it can increase computational costs and even degrade performance due to issues like vanishing gradients. This is where ResNet (Residual Networks) comes into play by introducing the concept of "Residual Learning."

# Residual Learning

<div align="center">
  <img src="/docs/resnet/building-block.png" />

Residual Learning Block [^1]

</div>

The core idea behind Residual Learning is quite straightforward: instead of the network directly learning the output, we modify the architecture to add the input back to the output. This allows the network to focus on learning the residuals, which are the differences between the input and the output, rather than the full transformation itself.

Let’s take a look at how this is implemented in PyTorch:

```python
def forward(self, x: Tensor) -> Tensor:
    identity = x  # Save the original input

    out = self.conv1(x)
    out = self.bn1(out)
    out = self.relu(out)

    out = self.conv2(out)
    out = self.bn2(out)

    # Apply downsampling if necessary to match dimensions
    if self.downsample is not None:
        identity = self.downsample(x)

    out += identity  # Add the original input (identity) to the output
    out = self.relu(out)

    return out
```

Looks simple, right? But this approach brings significant benefits. As the paper explains, this architecture makes it "easier to optimize deeper networks" while maintaining manageable complexity, allowing for deeper layers without suffering from the problems typically associated with them.

[^1]: [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385)

[^2]: [Very Deep Convolutional Networks for Large-Scale Image Recognition](https://arxiv.org/abs/1409.1556v6)
